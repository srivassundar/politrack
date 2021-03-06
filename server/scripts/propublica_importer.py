'''
Script for importing current Congress and Senate representatives from
the ProPublica API and populating the database.
'''

import argparse
import sqlite3

import requests

from congress_legislators_importer import append_congress_legislator_info

# Script Defaults
DEFAULTS = {
    'states': ['GA'],
    'db_filepath': '../db/propublica_officials.db',
    'db_table': 'officials_info',
    'clean_db': False,
}


# ProPublica API params
API_PARAMS = {
    'API_KEY': 'f3qwGJui2ZkimFVYpwURI4ESpP0VEVvfNvoY4h38',
    'current_members_endpoint': 'https://api.propublica.org/congress/v1/'
                                'members/{chamber}/{state}/current.json',
    'img_url': 'https://theunitedstates.io/images/congress/original/{id}.jpg',
}


ALL_STATES = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
              'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI',
              'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV',
              'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
              'VA', 'VT', 'WA', 'WI', 'WV', 'WY']


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
            'at_large'          integer         ,
            'img_url'           string          ,
            'wiki_url'          string          ,
            'votesmart_id'      text            ,
            'opensecrets_id'    text            ,
            'govtrack_id'       text
        );
    '''.format(tbl=DEFAULTS['db_table'])

    cursor = conn.cursor()
    cursor.execute(create_table)


def clean_table(conn):
    tbl = DEFAULTS['db_table']
    print('Cleaning table %s' % tbl)
    delete_table = '''
        DELETE FROM {tbl};
        VACUUM;
    '''.format(tbl=tbl)

    cursor = conn.cursor()
    cursor.executescript(delete_table)
    print('Successfully cleaned table %s' % tbl)
    print()


def retrieve_state_data(state, conn):
    print('Retrieving data for %s' % state)
    tbl = DEFAULTS['db_table']
    insert_table = '''
        INSERT OR REPLACE INTO {tbl} (
            'id', 'state', 'name', 'first_name', 'middle_name',
            'last_name', 'role', 'gender', 'party', 'times_topics_url',
            'twitter_id', 'facebook_account', 'youtube_id', 'seniority',
            'next_election', 'api_uri', 'district', 'at_large', 'img_url'
        )
        VALUES (
            :id, :state, :name, :first_name, :middle_name,
            :last_name, :role, :gender, :party, :times_topics_url,
            :twitter_id, :facebook_account, :youtube_id, :seniority,
            :next_election, :api_uri, :district, :at_large, :img_url
        );
    '''.format(tbl=tbl)
    cursor = conn.cursor()
    num_rows = 0

    for chamber in ['house', 'senate']:
        officials_endpoint = API_PARAMS['current_members_endpoint'].format(
            chamber=chamber, state=state)
        header = {'X-API-KEY': API_PARAMS['API_KEY']}
        response = requests.get(officials_endpoint, headers=header)
        if response.status_code != 200:
            print('Something went wrong while trying to retrieve endpoint',
                  officials_endpoint)
            continue
        response = response.json()
        for result in response.get('results'):
            result['state'] = state
            if 'at_large' in result:
                result['at_large'] = int(result['at_large'])
            result['district'] = result.get('district')
            result['at_large'] = result.get('at_large')
            result['img_url'] = API_PARAMS['img_url'].format(id=result['id'])
            cursor.execute(insert_table, result)
            num_rows += cursor.rowcount
    print('Successfully retrieved %d rows for %s' % (num_rows, state))
    print()
    return num_rows


def main():
    states, clean = parse_args()

    # Initialize db connection
    with sqlite3.connect(DEFAULTS['db_filepath']) as conn:
        if clean:
            clean_table(conn)
        setup_table(conn)
        total_rows = 0
        for state in states:
            num_rows = retrieve_state_data(state, conn)
            total_rows += num_rows
        append_congress_legislator_info(states, conn)
        print('Adding %d rows to the database' % total_rows)
        conn.commit()
    print('Done')


def parse_args():
    parser = argparse.ArgumentParser(
        description='Import data from ProPublica API')
    parser.add_argument('-s', '--states', metavar='state',
                        nargs='*', help='states to retrieve (two letter); '
                                        'to retrieve all states specify no '
                                        'states')
    parser.add_argument('-c', '--clean', action='store_true',
                        help='remove all records from table'
                             ' (specify states if you want to run script)')
    args = parser.parse_args()
    clean = DEFAULTS['clean_db']
    if args.clean is not None:
        clean = args.clean

    # Only set states to default to GA if clean is not set
    states = DEFAULTS['states'] if not clean else []
    if args.states is not None:
        if len(args.states):
            states = args.states
        else:
            states = ALL_STATES
    if any(len(state) != 2 for state in states):
        print('Each state must be a two letter state code')
    states = [state.upper() for state in states]

    return states, clean


if __name__ == '__main__':
    main()
