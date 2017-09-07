from __future__ import print_function

import os
import os.path
import sys

from flask import Flask, make_response, jsonify, request

app = Flask(__name__)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify( { 'error': 'Not found' } ), 404)


@app.route('/api/v0/officials', methods=['GET'])
def get_officials():
    return jsonify(
        {
            'officials': ['John Lewis'],
        }
    )



if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), port=8082)
