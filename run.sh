#!/bin/bash

ng build --env=prod --base-href ./ --output-path server/static
python2 server/app.py
