'''
Helper functions for connecting to and retrieving data from the
ProPublica API go here.
'''

import requests

from db_helpers import get_db

API_KEY = 'f3qwGJui2ZkimFVYpwURI4ESpP0VEVvfNvoY4h38'
MEMBER_DETAILS_API = 'https://api.propublica.org/congress/v1/members/{id}.json'
VOTES_API = 'https://api.propublica.org/congress/v1/members/{id}/votes.json'
BILLS_API = 'https://api.propublica.org/congress/v1/members/{id}/bills/cosponsored.json'


def fetch_member_details(memberId):
    '''
    Fetch member details using the ProPublica member ID. It returns all
    returned information as-is, without any data cleaning/processing.
    '''
    endpoint = MEMBER_DETAILS_API.format(id=memberId)
    header = {'X-API-KEY': API_KEY}
    response = requests.get(endpoint, headers=header)
    # We encountered an error while getting the request.
    if response.status_code != 200:
        raise Exception('Error code %d: %s' %
                        (response.status_code, response.text))
    response = response.json()
    if response.get('status') == 'ERROR':
        return None  # Effectively a 404
    return response.get('results')[0]


def fetch_member_ids(member_id):
    '''
    Fetch member IDs (Votesmart, Govtrack, Opensecrets) from the database.
    '''
    select_member_ids = '''
        SELECT
            id, votesmart_id, opensecrets_id, govtrack_id
        FROM officials_info
        WHERE
            id = :id
        ;
    '''.format()
    cursor = get_db().cursor()
    cursor.execute(select_member_ids, {'id': member_id})
    results = [dict(res) for res in cursor.fetchall()]
    if len(results) != 1:
        return None
    member_ids = {
        'bioguide_id': results[0]['id'],
        'votesmart_id': results[0]['votesmart_id'],
        'opensecrets_id': results[0]['opensecrets_id'],
        'govtrack_id': results[0]['govtrack_id'],
    }
    return member_ids


def parse_response(response):
    result = {}
    if response.status_code != 200:
        result['error'] = 'Not found'
    else:
        response = response.json()
        if response.get('status') == 'ERROR':
            result['error'] = 'Not found'
        else:
            result = response.get('results')[0]
    return result


def fetch_votes_bills(member_id):
    result = {
        'votes_info': {},
        'bills_info': {}
    }
    
    votes_endpoint = VOTES_API.format(id=member_id)
    header = {'X-API-KEY': API_KEY}
    response = requests.get(votes_endpoint, headers=header)
    result['votes_info'] = parse_response(response)
    
    bills_endpoint = BILLS_API.format(id=member_id)
    header = {'X-API-KEY': API_KEY}
    response = requests.get(bills_endpoint, headers=header)
    result['bills_info'] = parse_response(response)
    return result
    