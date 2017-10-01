from __future__ import print_function

import os
import os.path
import sys

from flask import Flask, make_response, jsonify, request, g, send_from_directory, abort
import requests
from votesmart_helpers import fetch_details
from propublica_helpers import fetch_member_details

from search_functions import get_officials_for_query

app = Flask(__name__)

# Server routing & management


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/api/v0/officials', methods=['GET'])
def get_officials():
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
    id = request.args.get('id')
    if id is None:
        return jsonify({'error': 'No ID specified'})

    try:
        details = fetch_member_details(request.args.get('id'))
        if details is None:
            return jsonify({'error': 'Invalid ID'})

        votesmart_id = details['votesmart_id']
        return jsonify(fetch_details(votesmart_id))
    except Exception as e:
        from traceback import print_exc
        print_exc(file=sys.stdout)
        return abort(500)

# Client routing & management

# All client endpoints defined in app-routing.module.ts should be listed here
# Angular will take care of appropriately rendering HTML


@app.route('/')
@app.route('/home')
@app.route('/search/<keyword>')
@app.route('/detail/<id>')
@app.route('/about')
def root(**kwargs):
    return app.send_static_file('index.html')

# For static resource retrieval (i.e., assets)


@app.route('/<path:path>')
def static_serve(path):
    return send_from_directory('static', path)


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), port=8082)
