'''
Helper functions for connecting to and retrieving data from the
ProPublica API go here.
'''

import requests

API_KEY = 'f3qwGJui2ZkimFVYpwURI4ESpP0VEVvfNvoY4h38'
MEMBER_DETAILS_API = 'https://api.propublica.org/congress/v1/members/{id}.json'


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
        return
    response = response.json()
    if response.get('status') == 'ERROR':
        return None  # Effectively a 404
    return response.get('results')[0]
