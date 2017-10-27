'''Module for helper functions related to the database'''

import os.path
import sqlite3
from flask import g

DATABASE = os.path.join(os.path.dirname(__file__),
                        'db/propublica_officials.db')


def get_db():
    '''
    Get the only allowed instance of our database. Used whenever the
    DB needs to be accessed.
    '''
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db
