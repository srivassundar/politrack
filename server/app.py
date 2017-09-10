from __future__ import print_function

import os
import os.path
import sys

from flask import Flask, make_response, jsonify, request, g, send_from_directory

from search_functions import get_officials_for_query

app = Flask(__name__)


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
    if query is None:
        return jsonify({'error': 'Invalid query string'})

    return jsonify(
        {
            'officials': officials,
        }
    )

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_serve(path):
    return send_from_directory('static', path)

if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), port=8082)
