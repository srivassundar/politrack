'''
Google Civic API helper functions are located here. They handle talking
to the API and returning results.
'''


import re
import requests


# Static parameters for the API
CIVIC_API_PARAMS = {
    'API_KEY': 'AIzaSyCNjxGVdNvYR-kG0lDAClkG1aH5jWxcsII',
    'address_endpoint':
        'https://www.googleapis.com/civicinfo/v2/representatives',
    'ocd_state_regex': 'ocd-division/country:us/state:([a-z]{2})$',
    'ocd_cd_regex': 'ocd-division/country:us/state:{state}/cd:([0-9]+)$',
}


def get_state_district_for_address(address):
    '''
    Query Google Civic Information API to figure out the Congressional
    district number for the given address.
    '''
    params = {
        'key': CIVIC_API_PARAMS['API_KEY'],
        'address': address,
    }

    resp = requests.get(CIVIC_API_PARAMS['address_endpoint'], params=params)
    resp = resp.json()
    if 'error' in resp:
        return None
    divisions = resp.get('divisions', {}).keys()
    predicted_address = resp.get('normalizedInput', {})
    # Find state using regex
    state = None
    for div in divisions:
        matches = re.findall(CIVIC_API_PARAMS['ocd_state_regex'], div)
        if len(matches):
            state = str(matches[0])
            break

    # Find congressional district using regex
    ocd_cd_regex = CIVIC_API_PARAMS['ocd_cd_regex'].format(state=state)
    cd = None
    for div in divisions:
        matches = re.findall(ocd_cd_regex, div)
        if len(matches):
            cd = int(matches[0])
            break

    # Capitalize state
    if state is not None:
        state = state.upper()

    return state, cd, predicted_address
