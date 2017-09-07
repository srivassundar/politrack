from __future__ import print_function

import argparse
import sqlite3
import sys

import requests

# Script Defaults
DEFAULTS = {
    'states': ['GA'],
    'num_workers': 5,
    'db_filepath': '../db/propublica_officials.db',
    'db_table': 'officials_info',
}


# ProPublica API params
API_PARAMS = {
    'API_KEY': 'f3qwGJui2ZkimFVYpwURI4ESpP0VEVvfNvoY4h38',
    'current_members_endpoint': 'https://api.propublica.org/congress/v1/'
                                'members/{chamber}/{state}/current.json',

}


def setup_table(conn):
    create_table = '''
        CREATE TABLE IF NOT EXISTS {tbl} (
            'id'                text    PRIMARY KEY,
            'state'             text    NOT NULL,
            'name'              text    NOT NULL,
            'first_name'        text            ,
            'middle_name'       text            ,
            'last_name'         text            ,
            'role'              text            ,
            'gender'            text            ,
            'party'             text            ,
            'times_topics_url'  text            ,
            'twitter_id'        text            ,
            'facebook_account'  text            ,
            'youtube_id'        text            ,
            'seniority'         text            ,
            'next_election'     text            ,
            'api_uri'           text            ,
            'district'          integer         ,
            'at_large'          integer
        );
    '''.format(tbl=DEFAULTS['db_table'])

    cursor = conn.cursor()

    cursor.execute(create_table)


def retrieve_state_data(state, conn):
    print('Retrieving data for %s' % state)
    tbl = DEFAULTS['db_table']
    insert_table = '''
        INSERT INTO {tbl} (
            'id', 'state', 'name', 'first_name', 'middle_name',
            'last_name', 'role', 'gender', 'party', 'times_topics_url',
            'twitter_id', 'facebook_account', 'youtube_id', 'seniority',
            'next_election', 'api_uri', 'district', 'at_large'
        )
        VALUES (
            :id, :state, :name, :first_name, :middle_name,
            :last_name, :role, :gender, :party, :times_topics_url,
            :twitter_id, :facebook_account, :youtube_id, :seniority,
            :next_election, :api_uri, :district, :at_large
        );
    '''.format(tbl=tbl)
    print(insert_table)
    cursor = conn.cursor()

    for chamber in ['house', 'senate']:
        officials_endpoint = API_PARAMS['current_members_endpoint'].format(
            chamber=chamber, state=state)
        header = {'X-API-KEY': API_PARAMS['API_KEY']}
        response = requests.get(officials_endpoint, headers=header)
        if response.status_code != 200:
            print("Something went wrong while trying to retrieve endpoint",
                  officials_endpoint)
            continue
        response = response.json()
        for result in response.get('results'):
            result['state'] = state
            if 'at_large' in result:
                result['at_large'] = int(result['at_large'])
            result['district'] = result.get('district')
            result['at_large'] = result.get('at_large')
            cursor.execute(insert_table, result)


def main():
    states = parse_args()
    print(states)

    # Initialize db connection
    with sqlite3.connect(DEFAULTS['db_filepath']) as conn:
        setup_table(conn)
        for state in states:
            retrieve_state_data(state, conn)
        conn.commit()


def parse_args():
    parser = argparse.ArgumentParser(
        description='Import data from ProPublica API')
    parser.add_argument('-s', '--states', metavar='state',
                        nargs='*', help='states to retrieve (two letter)')
    args = parser.parse_args()
    states = DEFAULTS['states']
    if args.states:
        states = args.states
    if any(len(state) != 2 for state in states):
        print('Each state must be a two letter state code')
    states = [state.upper() for state in states]
    return states


if __name__ == '__main__':
    main()
