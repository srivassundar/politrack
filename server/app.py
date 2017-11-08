import os
import os.path
import sys

from flask import Flask, make_response, jsonify, request, g, send_from_directory, abort

from votesmart_helpers import fetch_details
from opensecrets_helpers import fetch_finances
from propublica_helpers import fetch_member_ids, fetch_votes_bills
from search_functions import get_officials_for_query

app = Flask(__name__)


@app.teardown_appcontext
def close_connection(exception):
    '''Close the database connection on shutdown'''
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.errorhandler(404)
def not_found(error):
    '''
    404 not found error handler that returns JSON for API consistency.
    The default flask not found handler returns HTML.
    '''
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/api/v0/officials', methods=['GET'])
def get_officials():
    '''
    Endpoint for getting the list of officials based on a query string
    parameter named `query` which accepts an address or the name of a
    representative.
    '''
    query = request.args.get('query')
    if query is None:
        return jsonify({'error': 'No query string'})

    officials = get_officials_for_query(query)
    if officials is None:
        return jsonify({'error': 'Invalid query string'})

    return jsonify(
        {
            'officials': officials,
        }
    )


@app.route('/api/v0/details', methods=['GET'])
def get_details():
    '''
    Endpoint for getting detailed information about a political
    representative from on their Propublica ID that is passed in via
    the `id` query parameter.
    '''
    id = request.args.get('id')
    if id is None:
        return jsonify({'error': 'No ID specified'})

    # The only reason for exceptions to be thrown are when the remote
    # server is unavailable or the API key/ID is invalid.
    try:
        member_ids = fetch_member_ids(request.args.get('id'))
        if member_ids is None:
            return jsonify({'error': 'Invalid ID'})

        votesmart_id = member_ids['votesmart_id']
        return jsonify(fetch_details(votesmart_id))
    except Exception as e:
        from traceback import print_exc
        print_exc(file=sys.stdout)
        return abort(500)


@app.route('/api/v0/details/votes_bills', methods=['GET'])
def get_votes_bills():
    '''
    Endpoint for getting votes and bills related information about a political
    representative using their Bioguide ID that is passed in via
    the `id` query parameter.
    '''
    id = request.args.get('id')
    if id is None:
        return jsonify({'error': 'No ID specified'})
    votes_limit = float(request.args.get('votes_limit', 'inf'))
    bills_limit = float(request.args.get('bills_limit', 'inf'))

    # The only reason for exceptions to be thrown are when the remote
    # server is unavailable or the API key/ID is invalid.
    try:
        votes_bills = fetch_votes_bills(id)
        if ('error' not in votes_bills['votes_info'] and
                votes_limit < float(votes_bills['votes_info']['num_results'])):
            votes_bills['votes_info']['votes'] = votes_bills['votes_info']['votes'][:int(votes_limit)]
            votes_bills['votes_info']['num_results'] = int(votes_limit)
        if ('error' not in votes_bills['bills_info'] and
                bills_limit < float(votes_bills['bills_info']['num_results'])):
            votes_bills['bills_info']['bills'] = votes_bills['bills_info']['bills'][:int(bills_limit)]
            votes_bills['bills_info']['num_results'] = int(bills_limit)
        return jsonify(votes_bills)
    except Exception as e:
        from traceback import print_exc
        print_exc(file=sys.stdout)
        return abort(500)


@app.route('/api/v0/details/finances', methods=['GET'])
def get_finances():
    '''
    Endpoint for getting detailed information about a political
    representative from on their Propublica ID that is passed in via
    the `id` query parameter.
    '''
    id = request.args.get('id')
    if id is None:
        return jsonify({'error': 'No ID specified'})

    # The only reason for exceptions to be thrown are when the remote
    # server is unavailable or the API key/ID is invalid.
    try:
        member_ids = fetch_member_ids(request.args.get('id'))
        if member_ids is None:
            return jsonify({'error': 'Invalid ID'})

        opensecrets_id = member_ids['opensecrets_id']
        return jsonify(fetch_finances(opensecrets_id))
    except Exception as e:
        from traceback import print_exc
        print_exc(file=sys.stdout)
        return abort(500)

# Client routing & management

# All client endpoints defined in app-routing.module.ts should be
# listed here. This ensures that pages can still load when refreshed
# as we're using Angular's URL re-writing on the frontend.
# Angular will take care of appropriately rendering HTML.


@app.route('/')
@app.route('/home')
@app.route('/search/<keyword>')
@app.route('/detail/<id>')
@app.route('/about')
@app.route('/contact')
def root(**kwargs):
    '''
    Serve the static index page that loads our Angular.JS based
    frontend.
    '''
    return app.send_static_file('index.html')


@app.route('/<path:path>')
def static_serve(path):
    '''
    Handler for serving static resources (i.e. assets)
    '''
    return send_from_directory('static', path)


if __name__ == '__main__':
    app.run(host=os.getenv('IP', '0.0.0.0'), port=8082)
