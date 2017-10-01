import requests

API_KEY = 'f2ff4cb23fe3500a9a7f789b06c55ad5'


def _apicall(func, params):
    params = { k: v for k, v in params.items() if v }
    params['o'] = 'JSON'
    params['key'] = API_KEY
    url = 'http://api.votesmart.org/%s' % func
    resp = requests.get(url, params=params)
    resp = resp.json()
    if 'error' in resp:
        raise Exception(resp['error'])
    return resp


def fetch_details(candidateId):
    params = {'candidateId': candidateId}
    result = _apicall('CandidateBio.getDetailedBio', params)
    result1 = _apicall('Address.getOffice', params)['address']

    return {
        'bio': result['bio'],
        'office': result1['office'],
    }
