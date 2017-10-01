from __future__ import print_function

from enum import Enum

import re
import requests

from db_helpers import get_db
from civic_api_helpers import get_state_district_for_address


class QUERY_TYPE(Enum):
    INVALID = 0
    ADDRESS = 1
    NAME = 2


def get_officials_for_query(query):
    '''Takes in a search query and gets officials related to it.

    First understands if the query is an address/zipcode or a name.
    Then appropriately retrieves the officials from the database.
    '''

    query = query.lower().strip()

    officials = []

    query_type = classify_query(query)

    if query_type == QUERY_TYPE.INVALID:
        return None
    if query_type == QUERY_TYPE.ADDRESS:
        officials = get_officials_by_address(query)
    if query_type == QUERY_TYPE.NAME:
        officials = get_officials_by_name(query)

    return officials


def classify_query(query):
    # The query is too short!
    if len(query) < 2:
        return QUERY_TYPE.INVALID

    if query.isdigit():
        return QUERY_TYPE.ADDRESS

    # If there is more than 1 digit in the query, probably an address
    if sum(int(c.isdigit()) for c in query) > 1:
        return QUERY_TYPE.ADDRESS

    # Default query type as name
    return QUERY_TYPE.NAME


def get_officials_by_address(query):
    # Get state, congressional district from Google Civic Information API
    state, cd, predicted_address = get_state_district_for_address(query)
    if state is None or cd is None:
        return None

    select_by_address = '''
        SELECT
            *
        FROM officials_info
        WHERE
            state = :state
            AND (
                /* Senators */
                LOWER(role) LIKE 'senator%'
                /* Representatives of particular congressional district */
                OR (
                    LOWER(role) = 'representative'
                    AND district = :cd
                )
            )
        ;
    '''
    cursor = get_db().cursor()
    cursor.execute(select_by_address, {'state': state, 'cd': cd})
    return [dict(res) for res in cursor.fetchall()]


def get_officials_by_name(query):
    # Normalize query
    rm_punct_trans = str.maketrans('', '', '.,:;?[]{}()-_+=*&%$#@!')
    query = str(query).translate(rm_punct_trans)
    tokens = [tok.strip() for tok in query.split() if tok.strip()]
    if len(tokens) == 0:
        return None

    select_by_name = '''
        SELECT
            *
        FROM officials_info
        WHERE
            {like_clause}
    '''
    like_clause = '''
        OR '''.join(
            "LOWER(name) LIKE '%{tok}%'".format(tok=tok) for tok in tokens
        )
    cursor = get_db().cursor()
    # print(select_by_name.format(like_clause=like_clause))
    cursor.execute(select_by_name.format(like_clause=like_clause))
    results = [dict(res) for res in cursor.fetchall()]
    partial_matches = []
    full_matches = []
    for res in results:
        if str(res['name']).lower().translate(rm_punct_trans) == query:
            full_matches.append(res)
        else:
            partial_matches.append(res)
    return full_matches + partial_matches


# TODO: Use class for QueryResults
# TODO: Use predicted_address through QueryResults to show in the UI.
#       Will be useful in situations where seemingly random queries are flagged
#       as addresses and processed by the Google Civic Information API
