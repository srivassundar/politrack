#!/bin/bash

# Build Angular distribution
ng build --env=prod --base-href / --output-path server/static

# Start server
python2 server/app.py
