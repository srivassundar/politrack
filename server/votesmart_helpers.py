import json
import urllib2
import urllib

API_KEY = 'f2ff4cb23fe3500a9a7f789b06c55ad5'


def _apicall(func, params):
    params = dict([(k, v) for (k, v) in params.iteritems() if v])
    url = 'http://api.votesmart.org/%s?o=JSON&key=%s&%s' % (func,
                                                            API_KEY, urllib.urlencode(params))
    try:
        response = urllib2.urlopen(url).read()
        obj = json.loads(response)
        if 'error' in obj:
            raise Exception(obj['error']['errorMessage'])
        else:
            return obj
    except urllib2.HTTPError, e:
        raise Exception(e)
    except ValueError, e:
        raise Exception('Invalid Response')


def fetch_details(candidateId):
    params = {'candidateId': candidateId}
    result = _apicall('CandidateBio.getDetailedBio', params)
    result1 = _apicall('Address.getOffice', params)['address']

    return {
        'bio': result['bio'],
        'office': result1['office'],
    }
