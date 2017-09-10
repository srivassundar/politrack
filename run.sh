#!/bin/bash

# Build Angular distribution
ng build --env=prod --base-href / --output-path server/static

# Start server
if [ $? -eq 0 ]; then
    python2 server/app.py
else
    echo 'Angular build failed. Not running server.'
    exit 1
fi
