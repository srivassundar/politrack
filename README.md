# PoliTrack

PoliTrack is a web application that tracks elected representatives through a user-friendly visualization of data.

- [Install Guide](#install-guide)
- [Release Notes](#release-notes-politrack-version-10)

## Install Guide

PoliTrack can run without modifications on any UNIX-based system with a publicly available port 8082.

### Dependencies
Before proceeding further, ensure you have the following installed:

- Python 3.4+
- Node.js (version 6+)
- NPM (bundled with Node.js)

### Instructions

Download a ZIP snapshot of the repository and extract.

### Install dependencies
Navigate to the project's root directory and use this command to install front-end (Angular) dependencies:
```
npm install
```
Similarly, use this command to install back-end (Python) dependencies:
```
pip3 install -r requirements.txt
```

### Importing Data
To set-up the database for the first time, run the following:
```
cd server
python3 ./scripts/propublica_importer.py
python3 ./scripts/congress_legislators_importer.py
```

### Run Application
```
./run.sh
```
The server should now be running on `localhost:8082`

### Troubleshooting/Common Issues

- Ensure that `run.sh` has executable permissions. These can be set using `chmod +x run.sh`.
- If importer scripts fail, ensure that you are running them from the server directory.
- In case of issues with Node/npm version, ensure that you have the correct versions.
- If `run.sh` complains that modules aren't found, ensure that Angular and Python dependencies are correctly installed.
- You need to be in root directory before running `./run.sh`, otherwise it errors out due to relative path issues.


## Release Notes PoliTrack version 1.0

### New Software Features
 - Harambe icon featured in the homepage for unique, hip, and friendly design theme
 - Search bar searchable with zip code
 - Search bar searchable with name
 - Filter function working with political party
 - Filter function working with state
 - Sorting function working with relevance
 - Sorting function working with first name
 - Sorting function working with last name
 - Politician detail page shows basic information of official (date of birth, education, family, etc.)
 - Politician detail page shows biography
 - Politician detail page shows bills that the politician voted on
 - Politician detail page shows finance information with pie chart
 - Politician detail page shows social media links to facebook, twitter, and youtube
 - Politician detail page shows news related to the politician

### Bug Fixes
 - Vote Smart API updated with renewed license
 - Search bar allows enter key to be pressed as well as the search button
 - Placeholder images if official has no associated image

### Known bugs and defects
 - Search icon in the navigation bar does not work at the moment
 - Loading time of politician detail page has a long loading time
 - Pie chart in politician detail page in finances tab is not responsive
 - New York Times embedded news frame does not load properly for some politicians
