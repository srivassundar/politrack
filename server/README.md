# PoliTrack Backend Service

PoliTrack Backend Service runs as a Flask server API.

### Populating the database
The database is called propublica_officials.db and the officials table is called officials_info.

Populate the table using this command:
```
    python propublica_importer.py -c --states
```
Note that this cleans the database and then retrieves data for all 50 states.

To clean the database and retrieves data for specific state(s), for example GA & ID:
```
    python propublica_importer.py -c --states GA ID
```
This cleans the database and then retrieves data for the state GA & ID.

For more information on the script, run:
```
    python propublica_importer.py -h
```

*Note: Make sure to run the script from the scripts folder to file name issues.*

### Running the backend server
To run the backend flask server run:
```
    python app.py
```
The server runs at `localhost:8082` or `http://0.0.0.0:8082/`

### Querying the backend server

After starting the server, here is a sample API call to the officials endpoint made using cURL:
```
    curl -i http://0.0.0.0:8082/api/v0/officials?query=120%20North%20Ave%20NW%20Atlanta

    HTTP/1.0 200 OK
    Content-Type: application/json
    Content-Length: 1936
    Server: Werkzeug/0.11.15 Python/2.7.13
    Date: Thu, 07 Sep 2017 17:14:38 GMT

    {
      "officials": [
        {
          "api_uri": "https://api.propublica.org/congress/v1/members/L000287.json",
          "at_large": 0,
          "district": 5,
          "facebook_account": "RepJohnLewis",
          "first_name": "John",
          "gender": "M",
          "id": "L000287",
          "last_name": "Lewis",
          "middle_name": "",
          "name": "John Lewis",
          "next_election": "2018",
          "party": "D",
          "role": "Representative",
          "seniority": "32",
          "state": "GA",
          "times_topics_url": "http://topics.nytimes.com/top/reference/timestopics/people/l/john_lewis/index.html",
          "twitter_id": "RepJohnLewis",
          "youtube_id": "repjohnlewis"
        },
        {
          "api_uri": "https://api.propublica.org/congress/v1/members/P000612.json",
          "at_large": null,
          "district": null,
          "facebook_account": null,
          "first_name": "David",
          "gender": "M",
          "id": "P000612",
          "last_name": "Perdue",
          "middle_name": null,
          "name": "David Perdue",
          "next_election": "2020",
          "party": "R",
          "role": "Senator, 2nd Class",
          "seniority": "3",
          "state": "GA",
          "times_topics_url": null,
          "twitter_id": "sendavidperdue",
          "youtube_id": null
        },
        {
          "api_uri": "https://api.propublica.org/congress/v1/members/I000055.json",
          "at_large": null,
          "district": null,
          "facebook_account": "",
          "first_name": "Johnny",
          "gender": "M",
          "id": "I000055",
          "last_name": "Isakson",
          "middle_name": null,
          "name": "Johnny Isakson",
          "next_election": "2022",
          "party": "R",
          "role": "Senator, 3rd Class",
          "seniority": "13",
          "state": "GA",
          "times_topics_url": "http://topics.nytimes.com/top/reference/timestopics/people/i/johnny_isakson/index.html",
          "twitter_id": "SenatorIsakson",
          "youtube_id": "SenatorIsakson"
        }
      ]
    }
```
