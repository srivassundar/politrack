'''
Helper functions for connecting to and retrieving data from the
Open Secrets API go here.
'''

import requests

from db_helpers import get_db

API_KEY = '32b4362f2428b2a2ee08aa09c9eb45e4'
API_ENDPOINT = 'https://www.opensecrets.org/api/'


def parse_response(response):
    result = {}
    if response.status_code != 200:
        result['error'] = 'Not found'
    else:
        response = response.json()
        result = response.get('response')
    return result


def fetch_finances(opensecrets_id):
    result = {
        'contributors': {},
        'sectors': {},
        'industries': {}
    }
    params = {
        'cid': opensecrets_id,
        'apikey': API_KEY,
        'output': 'json'
    }
    
    params['method'] = 'candContrib'
    response = requests.get(API_ENDPOINT, params=params)
    result['contributors'] = parse_response(response)['contributors']
    
    params['method'] = 'candSector'
    response = requests.get(API_ENDPOINT, params=params)
    result['sectors'] = parse_response(response)['sectors']
    
    params['method'] = 'candIndustry'
    response = requests.get(API_ENDPOINT, params=params)
    result['industries'] = parse_response(response)['industries']

    return result
    