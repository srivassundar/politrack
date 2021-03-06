'''
Add Wikipedia URL for each official from the congress legislators
dataset into the database.
'''

import argparse
import json
import sqlite3
import sys

# Script Defaults
DEFAULTS = {
    'db_filepath': '../db/propublica_officials.db',
    'db_table': 'officials_info',
}

ALL_STATES = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
              'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI',
              'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV',
              'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
              'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

LEGISLATORS = None


def get_legislators():
    if LEGISLATORS is not None:
        return LEGISLATORS
    with open('../db/legislators-current.json') as fp:
        return json.load(fp)


def append_congress_legislator_info(states, conn):
    legislators_ids = [v['id'] for v in get_legislators()]
    create_leg_table = '''
        CREATE TEMPORARY TABLE IF NOT EXISTS {tmp_tbl} (
            'id'        text    PRIMARY KEY,
            'wiki_url'  text,
            'votesmart_id' text,
            'opensecrets_id' text,
            'govtrack_id' text
        );
    '''.format(tmp_tbl='temp_leg')

    insert_leg = '''
        INSERT OR REPLACE INTO {tmp_tbl} (
            'id', 'wiki_url', 'votesmart_id', 'opensecrets_id', 'govtrack_id'
        )
        VALUES (:id, :wiki_url, :votesmart_id, :opensecrets_id, :govtrack_id);
    '''.format(tmp_tbl='temp_leg')

    join_officials_leg = '''
        INSERT OR REPLACE INTO {tbl} (
            'id', 'state', 'name', 'first_name', 'middle_name',
            'last_name', 'role', 'gender', 'party', 'times_topics_url',
            'twitter_id', 'facebook_account', 'youtube_id', 'seniority',
            'next_election', 'api_uri', 'district', 'at_large', 'img_url',
            'wiki_url', 'votesmart_id', 'opensecrets_id', 'govtrack_id'
        )
        SELECT O.id, state, name, first_name, middle_name,
        last_name, role, gender, party, times_topics_url,
        twitter_id, facebook_account, youtube_id, seniority,
        next_election, api_uri, district, at_large, img_url,
        L.wiki_url, L.votesmart_id, L.opensecrets_id, L.govtrack_id
        FROM {tbl} O
        LEFT OUTER JOIN {tmp_tbl} L
        ON O.id = L.id
        WHERE state IN ({states_str})
        ;
    '''.format(tbl=DEFAULTS['db_table'], tmp_tbl='temp_leg',
               states_str=', '.join("'{s}'".format(s=s) for s in states))
    
    drop_leg_table = '''
        DROP TABLE IF EXISTS {tmp_tbl};
    '''.format(tmp_tbl='temp_leg')

    cursor = conn.cursor()
    cursor.execute(create_leg_table)
    for leg_id in legislators_ids:
        leg_info = {
            'id': leg_id['bioguide'],
            'wiki_url': 'https://en.wikipedia.org/wiki/{wiki_name}'.format(
                wiki_name=leg_id['wikipedia']),
            'votesmart_id': leg_id.get('votesmart'),
            'opensecrets_id': leg_id.get('opensecrets'),
            'govtrack_id': leg_id.get('govtrack')
        }
        cursor.execute(insert_leg, leg_info)
    cursor.execute(join_officials_leg)
    cursor.execute(drop_leg_table)


def main():
    states = parse_args()

    with sqlite3.connect(DEFAULTS['db_filepath']) as conn:
        append_congress_legislator_info(states, conn)
        conn.commit()


def parse_args():
    parser = argparse.ArgumentParser(
        description='Append wikipedia urls from congress-legislators data.')
    parser.add_argument('-s', '--states', metavar='state',
                        nargs='*', help='states to retrieve (two letter); '
                                        'to retrieve all states specify no '
                                        'states')
    args = parser.parse_args()

    states = ALL_STATES
    if args.states is not None and len(args.states):
        states = args.states
    if any(len(state) != 2 for state in states):
        print('Each state must be a two letter state code')
    states = [state.upper() for state in states]

    return states


if __name__ == '__main__':
    main()
