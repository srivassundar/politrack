# PoliTrack Backend Service

PoliTrack Backend Service runs as a Flask server API.

### Populating the database
The database is called propublica_officials.db and the officials table is called officials_info.

Populate the table using this command:
```
    python3 propublica_importer.py -c --states
```
Note that this cleans the database and then retrieves data for all 50 states.

To clean the database and retrieves data for specific state(s), for example GA & ID:
```
    python3 propublica_importer.py -c --states GA ID
```
This cleans the database and then retrieves data for the state GA & ID.

For more information on the script, run:
```
    python3 propublica_importer.py -h
```

*Note: Make sure to run the script from the scripts folder to file name issues.*

### Running the backend server
To run the backend flask server run:
```
    python3 app.py
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

Similarly, official details can be queried using the ID returned by the previous call:
```
    curl -i http://0.0.0.0:8082/api/v0/details?id=L000287

    HTTP/1.0 200 OK
    Content-Type: application/json
    Content-Length: 21659
    Server: Werkzeug/0.12.2-dev Python/2.7.14
    Date: Sun, 01 Oct 2017 00:34:50 GMT

    {
    "bio": {
        "candidate": {
        "birthDate": "02/21/1940",
        "birthPlace": "Troy, AL",
        "candidateId": "26820",
        "congMembership": {
            "experience": [
            {
                "district": "",
                "fullText": "Co-Chair, Congressional Structured Settlements Caucus, present",
                "organization": "Congressional Structured Settlements Caucus",
                "span": "present",
                "special": "",
                "title": "Co-Chair"
            },
            {
                "district": "",
                "fullText": "Co-Chair, Chronic Obstructive Pulmonary Disease Caucus, present",
                "organization": "Chronic Obstructive Pulmonary Disease Caucus",
                "span": "present",
                "special": "",
                "title": "Co-Chair"
            },
            {
                "district": "",
                "fullText": "Member, Financial and Economic Literacy Caucus, present",
                "organization": "Financial and Economic Literacy Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Intellectual Property Promotion and Piracy Prevention, present",
                "organization": "Intellectual Property Promotion and Piracy Prevention",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Labor and Working Families Caucus, present",
                "organization": "Labor and Working Families Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Brazil Caucus, present",
                "organization": "Brazil Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Caucus on India and Indian Americans, present",
                "organization": "Congressional Caucus on India and Indian Americans",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Fourth Amendment Caucus, present",
                "organization": "Fourth Amendment Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Arts Caucus, present",
                "organization": "Congressional Arts Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Caucus on Hellenic Issues, present",
                "organization": "Caucus on Hellenic Issues",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Caucus on Turkey, present",
                "organization": "Caucus on Turkey",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Albanian Issues Caucus, present",
                "organization": "Albanian Issues Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Foster Youth Caucus, present",
                "organization": "Foster Youth Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Missing and Exploited Children Caucus, present",
                "organization": "Missing and Exploited Children Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Caucus on Human Trafficking, present",
                "organization": "Caucus on Human Trafficking",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Bipartisan Task Force on Nonproliferation, present",
                "organization": "Bipartisan Task Force on Nonproliferation",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Diabetes Caucus, present",
                "organization": "Diabetes Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Science, Technology, Engingeering and Mathematics (STEM) Education Caucus, present",
                "organization": "Science, Technology, Engingeering and Mathematics (STEM) Education Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Green Schools Caucus, present",
                "organization": "Green Schools Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, 21st Century Health Care Caucus, present",
                "organization": "21st Century Health Care Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Tennessee Valley Authority Caucus, present",
                "organization": "Tennessee Valley Authority Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Tri-Caucus, present",
                "organization": "Tri-Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Pakistan Caucus, present",
                "organization": "Pakistan Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, House Trails Caucus, present",
                "organization": "House Trails Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Out of Iraq Caucus, present",
                "organization": "Out of Iraq Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Out of Poverty Caucus, present",
                "organization": "Out of Poverty Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Peanut Caucus, present",
                "organization": "Peanut Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Native American Caucus, present",
                "organization": "Native American Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, House Rural Health Care Caucus, present",
                "organization": "House Rural Health Care Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, House Nursing Caucus, present",
                "organization": "House Nursing Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, House Cancer Caucus, present",
                "organization": "House Cancer Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Historic Preservation Caucus, present",
                "organization": "Historic Preservation Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Global Road Safety Caucus, present",
                "organization": "Global Road Safety Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Gaming Caucus, present",
                "organization": "Gaming Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Friends of New Zealand Congressional Caucus, present",
                "organization": "Friends of New Zealand Congressional Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Cystic Fibrosis Caucus, present",
                "organization": "Cystic Fibrosis Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Urban Caucus, present",
                "organization": "Congressional Urban Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Victims' Rights Caucus, present",
                "organization": "Congressional Victims' Rights Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Vision Caucus, present",
                "organization": "Congressional Vision Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Soccer Caucus, present",
                "organization": "Congressional Soccer Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Progressive Caucus, present",
                "organization": "Congressional Progressive Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Pro-Choice Caucus, present",
                "organization": "Congressional Pro-Choice Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Kidney Caucus, present",
                "organization": "Congressional Kidney Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Human Rights Caucus, present",
                "organization": "Congressional Human Rights Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Humanities Caucus, present",
                "organization": "Congressional Humanities Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Coalition on Adoption, present",
                "organization": "Congressional Coalition on Adoption",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, Congressional Black Caucus, present",
                "organization": "Congressional Black Caucus",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Former Chair, Student Nonviolent Coordinating Committee (SNCC), 1963-1966",
                "organization": "Student Nonviolent Coordinating Committee (SNCC)",
                "span": "1963-1966",
                "special": "",
                "title": "Former Chair"
            },
            {
                "district": "",
                "fullText": "Former Member, Health Subcommittee, United States House of Representatives",
                "organization": "Health Subcommittee, United States House of Representatives",
                "span": "",
                "special": "",
                "title": "Former Member"
            },
            {
                "district": "",
                "fullText": "Former Member, Human Resources Subcommittee, United States House of Representatives",
                "organization": "Human Resources Subcommittee, United States House of Representatives",
                "span": "",
                "special": "",
                "title": "Former Member"
            },
            {
                "district": "",
                "fullText": "Former Member, Human Resources Subcommittee, United States House of Representatives",
                "organization": "Human Resources Subcommittee, United States House of Representatives",
                "span": "",
                "special": "",
                "title": "Former Member"
            }
            ]
        },
        "crpId": "N00002577",
        "education": {
            "institution": [
            {
                "degree": "BA",
                "field": "Philosophy/Religion",
                "fullText": "BA, Philosophy/Religion, Fisk University, 1967",
                "gpa": "",
                "school": "Fisk University",
                "span": "1967"
            },
            {
                "degree": "BA",
                "field": "Theology",
                "fullText": "BA, Theology, American Baptist College of American Baptist Theological Seminary, 1961",
                "gpa": "",
                "school": "American Baptist College of American Baptist Theological Seminary",
                "span": "1961"
            }
            ]
        },
        "family": "Widowed; 1 Child: John",
        "firstName": "John",
        "gender": "Male",
        "homeCity": "Atlanta",
        "homeState": "GA",
        "lastName": "Lewis",
        "middleName": "R.",
        "nickName": "",
        "orgMembership": {
            "experience": [
            {
                "district": "",
                "fullText": "Member, Robert F. Kennedy Memorial, present",
                "organization": "Robert F. Kennedy Memorial",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Member, African American Institute, Martin Luther King Center for Social Change, present",
                "organization": "African American Institute, Martin Luther King Center for Social Change",
                "span": "present",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Coordinator, Mississippi Freedom Summer, 1964",
                "organization": "Mississippi Freedom Summer",
                "span": "1964",
                "special": "",
                "title": "Coordinator"
            }
            ]
        },
        "photo": "https://static.votesmart.org/canphoto/26820.jpg",
        "political": {
            "experience": [
            {
                "district": "",
                "fullText": "Senior Chief Deputy Whip, United States House of Representatives, present",
                "organization": "United States House of Representatives",
                "span": "present",
                "special": "",
                "title": "Senior Chief Deputy Whip"
            },
            {
                "district": "",
                "fullText": "Representative, United States House of Representatives, 1987-present",
                "organization": "United States House of Representatives",
                "span": "1987-present",
                "special": "",
                "title": "Representative"
            },
            {
                "district": "",
                "fullText": "Member, Atlanta City Council, 1982-1986",
                "organization": "Atlanta City Council",
                "span": "1982-1986",
                "special": "",
                "title": "Member"
            },
            {
                "district": "",
                "fullText": "Candidate, Special Election, United States House of Representatives, 1977",
                "organization": "Special Election, United States House of Representatives",
                "span": "1977",
                "special": "",
                "title": "Candidate"
            }
            ]
        },
        "preferredName": "John",
        "profession": {
            "experience": [
            {
                "district": "",
                "fullText": "Author, present",
                "organization": "",
                "span": "present",
                "special": "",
                "title": "Author"
            },
            {
                "district": "",
                "fullText": "Community Affairs Director, National Consumer Cooperative Bank, 1980-1982",
                "organization": "National Consumer Cooperative Bank",
                "span": "1980-1982",
                "special": "",
                "title": "Community Affairs Director"
            },
            {
                "district": "",
                "fullText": "Director, ACTION Federal Volunteer Agency, 1977",
                "organization": "ACTION Federal Volunteer Agency",
                "span": "1977",
                "special": "",
                "title": "Director"
            },
            {
                "district": "",
                "fullText": "Former Associate Director, Field Foundation",
                "organization": "Field Foundation",
                "span": "",
                "special": "",
                "title": "Former Associate Director"
            },
            {
                "district": "",
                "fullText": "Former Director, Voter Education Project",
                "organization": "Voter Education Project",
                "span": "",
                "special": "",
                "title": "Former Director"
            }
            ]
        },
        "pronunciation": "",
        "religion": "Protestant",
        "specialMsg": "",
        "suffix": ""
        },
        "generalInfo": {
        "linkBack": "http://votesmart.org/bio.php?can_id=26820",
        "title": "Project Vote Smart - Bio -  John Lewis"
        },
        "office": {
        "committee": [
            {
            "committeeId": "4035",
            "committeeName": "Subcommittee on Oversight (Ways and Means)"
            },
            {
            "committeeId": "23",
            "committeeName": "Ways and Means"
            }
        ],
        "district": "5",
        "districtId": "21936",
        "firstElect": "11/04/1986",
        "lastElect": "11/08/2016",
        "name": [
            "U.S. House",
            "U.S. House"
        ],
        "nextElect": "",
        "parties": "Democratic",
        "shortTitle": "Rep.",
        "stateId": "GA",
        "status": "active",
        "termEnd": "",
        "termStart": "01/03/1987",
        "title": "Representative",
        "type": "Congressional"
        }
    },
    "office": [
        {
        "address": {
            "city": "Washington",
            "state": "DC",
            "street": "343 Cannon House Office Building",
            "type": "Washington, D.C.",
            "typeId": "2",
            "zip": "20515"
        },
        "notes": {
            "contactName": "",
            "contactTitle": ""
        },
        "phone": {
            "cellphone": "",
            "fax1": "202-225-0351",
            "fax2": "",
            "phone1": "202-225-3801",
            "phone2": "",
            "tollFree": "",
            "ttyd": ""
        }
        },
        {
        "address": {
            "city": "Atlanta",
            "state": "GA",
            "street": "100 Peachtree Street Northwest\nSuite 1920",
            "type": "District",
            "typeId": "5",
            "zip": "30303"
        },
        "notes": {
            "contactName": "",
            "contactTitle": ""
        },
        "phone": {
            "cellphone": "",
            "fax1": "404-331-0947",
            "fax2": "",
            "phone1": "404-659-0116",
            "phone2": "",
            "tollFree": "",
            "ttyd": ""
        }
        }
    ]
    }
```

Votes and Bills data can be fetched as per the example below:
```
    curl -i "http://0.0.0.0:8082/api/v0/details/votes_bills?id=L000287&votes_limit=5&bills_limit=5"HTTP/1.0 200 OK
    Content-Type: application/json
    Content-Length: 17426
    Server: Werkzeug/0.12.1 Python/3.4.3
    Date: Tue, 07 Nov 2017 04:54:04 GMT
    
    
    {
      "bills_info": {
        "bills": [
          {
            "active": false, 
            "bill_id": "hr1173-115", 
            "bill_type": "hr", 
            "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr1173.json", 
            "committees": "House Ways and Means Committee", 
            "congress": "115", 
            "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/1173", 
            "cosponsored_date": "2017-10-31", 
            "cosponsors": 32, 
            "cosponsors_by_party": {
              "D": 24, 
              "R": 8
            }, 
            "enacted": null, 
            "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr1173", 
            "gpo_pdf_uri": null, 
            "house_passage": null, 
            "introduced_date": "2017-02-16", 
            "latest_major_action": "Referred to the Subcommittee on Health.", 
            "latest_major_action_date": "2017-03-02", 
            "number": "H.R.1173", 
            "primary_subject": "Health", 
            "senate_passage": null, 
            "short_title": "Medicare Mental Health Access Act", 
            "sponsor_id": "N000184", 
            "sponsor_name": "Kristi Noem", 
            "sponsor_party": "R", 
            "sponsor_state": "SD", 
            "sponsor_title": "Rep.", 
            "sponsor_uri": "https://api.propublica.org/congress/v1/members/N000184.json", 
            "summary": "Medicare Mental Health Access Act This bill amends title XVIII (Medicare) of the Social Security Act to expand the definition of \"physician,\" for purposes of the Medicare program, to include a clinical psychologist with respect to the furnishing of qualified psychologist services.", 
            "summary_short": "Medicare Mental Health Access Act This bill amends title XVIII (Medicare) of the Social Security Act to expand the definition of &quot;physician,&quot; for purposes of the Medicare program, to include a clinical psychologist with respect to the furnishing of qualified psychologist services.", 
            "title": "To amend title XVIII of the Social Security Act to provide for treatment of clinical psychologists as physicians for purposes of furnishing clinical psychologist services under the Medicare program.", 
            "vetoed": null
          }, 
          {
            "active": false, 
            "bill_id": "hr4172-115", 
            "bill_type": "hr", 
            "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4172.json", 
            "committees": "House Energy and Commerce Committee", 
            "congress": "115", 
            "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4172", 
            "cosponsored_date": "2017-10-31", 
            "cosponsors": 20, 
            "cosponsors_by_party": {
              "D": 20
            }, 
            "enacted": null, 
            "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4172", 
            "gpo_pdf_uri": null, 
            "house_passage": null, 
            "introduced_date": "2017-10-31", 
            "latest_major_action": "Referred to the Committee on Ways and Means, and in addition to the Committee on Energy and Commerce, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.", 
            "latest_major_action_date": "2017-10-31", 
            "number": "H.R.4172", 
            "primary_subject": "", 
            "senate_passage": null, 
            "short_title": "To amend the Internal Revenue Code of 1986 to provide tax relief for major disasters declared in any of calendar years 2012 through 2015, to make certain tax relief provisions permanent, and for other purposes.", 
            "sponsor_id": "N000015", 
            "sponsor_name": "Richard E. Neal", 
            "sponsor_party": "D", 
            "sponsor_state": "MA", 
            "sponsor_title": "Rep.", 
            "sponsor_uri": "https://api.propublica.org/congress/v1/members/N000015.json", 
            "summary": "", 
            "summary_short": "", 
            "title": "To amend the Internal Revenue Code of 1986 to provide tax relief for major disasters declared in any of calendar years 2012 through 2015, to make certain tax relief provisions permanent, and for other purposes.", 
            "vetoed": null
          }, 
          {
            "active": false, 
            "bill_id": "hconres88-115", 
            "bill_type": "hconres", 
            "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hconres88.json", 
            "committees": "House Judiciary Committee", 
            "congress": "115", 
            "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-concurrent-resolution/88", 
            "cosponsored_date": "2017-10-27", 
            "cosponsors": 36, 
            "cosponsors_by_party": {
              "D": 34, 
              "R": 2
            }, 
            "enacted": null, 
            "govtrack_url": "https://www.govtrack.us/congress/bills/115/hconres88", 
            "gpo_pdf_uri": null, 
            "house_passage": null, 
            "introduced_date": "2017-10-27", 
            "latest_major_action": "Referred to the Committee on Foreign Affairs, and in addition to the Committee on the Judiciary, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.", 
            "latest_major_action_date": "2017-10-27", 
            "number": "H.CON.RES.88", 
            "primary_subject": "International Affairs", 
            "senate_passage": null, 
            "short_title": "Expressing the sense of the Congress that temporary protected status for Haitian nationals should be extended until that country has demonstrably recovered from the 2010 earthquake, the cholera epidemic, Hurricane Matthew, and other disasters.", 
            "sponsor_id": "W000808", 
            "sponsor_name": "Frederica Wilson", 
            "sponsor_party": "D", 
            "sponsor_state": "FL", 
            "sponsor_title": "Rep.", 
            "sponsor_uri": "https://api.propublica.org/congress/v1/members/W000808.json", 
            "summary": "Expresses the sense of Congress that: (1) the people of the United States stand in solidarity with the people of Haiti and support efforts to help Haiti recover and develop into a prosperous democracy; (2) Haiti has not recovered from the natural and man-made disasters that prompted the Department of Homeland Security (DHS) to designate Haiti as a temporary protected status (TPS) country; (3) DHS should extend Haiti's TPS designation; (4) the Department of State should urge the United Nations to fulfill its pledge to treat and eliminate cholera, improve long-term access to clean water and sanitation, and assist victims; and (5) a prosperous and democratic Haiti will be better positioned to provide opportunities for its citizens, address crises, meet its obligations, and advance shared U.S.-Haiti interests and values. ", 
            "summary_short": "Expresses the sense of Congress that: (1) the people of the United States stand in solidarity with the people of Haiti and support efforts to help Haiti recover and develop into a prosperous democracy; (2) Haiti has not recovered from the natural and man-made disasters that prompted the Department of Homeland Security (DHS) to designate Haiti as a temporary protected status (TPS) country; (3) DHS should extend Haiti&#39;s TPS designation; (4) the Department of State should urge the United Nations...", 
            "title": "Expressing the sense of the Congress that temporary protected status for Haitian nationals should be extended until that country has demonstrably recovered from the 2010 earthquake, the cholera epidemic, Hurricane Matthew, and other disasters.", 
            "vetoed": null
          }, 
          {
            "active": false, 
            "bill_id": "hres593-115", 
            "bill_type": "hres", 
            "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hres593.json", 
            "committees": "House Energy and Commerce Committee", 
            "congress": "115", 
            "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-resolution/593", 
            "cosponsored_date": "2017-10-26", 
            "cosponsors": 20, 
            "cosponsors_by_party": {
              "D": 16, 
              "R": 4
            }, 
            "enacted": null, 
            "govtrack_url": "https://www.govtrack.us/congress/bills/115/hres593", 
            "gpo_pdf_uri": null, 
            "house_passage": null, 
            "introduced_date": "2017-10-26", 
            "latest_major_action": "Referred to the Committee on Foreign Affairs, and in addition to the Committee on Energy and Commerce, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.", 
            "latest_major_action_date": "2017-10-26", 
            "number": "H.RES.593", 
            "primary_subject": "Health", 
            "senate_passage": null, 
            "short_title": "Recognizing the importance of a continued commitment to ending pediatric HIV/AIDS worldwide.", 
            "sponsor_id": "L000551", 
            "sponsor_name": "Barbara Lee", 
            "sponsor_party": "D", 
            "sponsor_state": "CA", 
            "sponsor_title": "Rep.", 
            "sponsor_uri": "https://api.propublica.org/congress/v1/members/L000551.json", 
            "summary": "", 
            "summary_short": "", 
            "title": "Recognizing the importance of a continued commitment to ending pediatric HIV/AIDS worldwide.", 
            "vetoed": null
          }, 
          {
            "active": false, 
            "bill_id": "hr233-115", 
            "bill_type": "hr", 
            "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr233.json", 
            "committees": "House Transportation and Infrastructure Committee", 
            "congress": "115", 
            "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/233", 
            "cosponsored_date": "2017-10-26", 
            "cosponsors": 65, 
            "cosponsors_by_party": {
              "D": 52, 
              "R": 13
            }, 
            "enacted": null, 
            "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr233", 
            "gpo_pdf_uri": null, 
            "house_passage": null, 
            "introduced_date": "2017-01-03", 
            "latest_major_action": "Referred to the Subcommittee on Railroads, Pipelines, and Hazardous Materials.", 
            "latest_major_action_date": "2017-01-04", 
            "number": "H.R.233", 
            "primary_subject": "Transportation and Public Works", 
            "senate_passage": null, 
            "short_title": "Safe Freight Act of 2017", 
            "sponsor_id": "Y000033", 
            "sponsor_name": "Don Young", 
            "sponsor_party": "R", 
            "sponsor_state": "AK", 
            "sponsor_title": "Rep.", 
            "sponsor_uri": "https://api.propublica.org/congress/v1/members/Y000033.json", 
            "summary": "Safe Freight Act of 2017  This bill prohibits the operation of a freight train or light locomotive engine used in the movement of freight unless it has a crew of at least two individuals, one of whom is certified by the Federal Rail Administration as a locomotive operator and the other as a train conductor.", 
            "summary_short": "Safe Freight Act of 2017  This bill prohibits the operation of a freight train or light locomotive engine used in the movement of freight unless it has a crew of at least two individuals, one of whom is certified by the Federal Rail Administration as a locomotive operator and the other as a train conductor.", 
            "title": "To amend title 49, United States Code, to provide for the minimum size of crews of freight trains, and for other purposes.", 
            "vetoed": null
          }
        ], 
        "id": "L000287", 
        "member_uri": "https://api.propublica.org/congress/v1/members/L000287.json", 
        "name": "John Lewis", 
        "num_results": 5, 
        "offset": 0
      }, 
      "votes_info": {
        "member_id": "L000287", 
        "num_results": 5, 
        "offset": "0", 
        "votes": [
          {
            "amendment": {}, 
            "bill": {
              "api_uri": null, 
              "bill_id": "journal-115", 
              "latest_action": null, 
              "number": "JOURNAL", 
              "title": null
            }, 
            "chamber": "House", 
            "congress": "115", 
            "date": "2017-11-06", 
            "description": "", 
            "member_id": "L000287", 
            "position": "No", 
            "question": "On Approving the Journal", 
            "result": "Passed", 
            "roll_call": "609", 
            "session": "1", 
            "time": "19:11:00", 
            "total": {
              "no": 169, 
              "not_voting": 38, 
              "present": 3, 
              "yes": 222
            }, 
            "vote_uri": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/609.json"
          }, 
          {
            "amendment": {}, 
            "bill": {
              "bill_id": "hr1066-115", 
              "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr1066.json", 
              "latest_action": "Ordered to be Reported by Voice Vote.", 
              "number": "H R 1066", 
              "sponsor_id": "K000381", 
              "title": "To direct the Secretary of Veterans Affairs to submit to the Committees on Veterans&#39; Affairs of the Senate and the House of Representatives a report regarding the organizational structure of the Department of Veterans Affairs, and for other purposes."
            }, 
            "chamber": "House", 
            "congress": "115", 
            "date": "2017-11-06", 
            "description": "VA Management Alignment Act", 
            "member_id": "L000287", 
            "position": "Yes", 
            "question": "On Motion to Suspend the Rules and Pass", 
            "result": "Passed", 
            "roll_call": "608", 
            "session": "1", 
            "time": "19:03:00", 
            "total": {
              "no": 0, 
              "not_voting": 33, 
              "present": 0, 
              "yes": 399
            }, 
            "vote_uri": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/608.json"
          }, 
          {
            "amendment": {}, 
            "bill": {
              "bill_id": "hr3562-115", 
              "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr3562.json", 
              "latest_action": "Ordered to be Reported by Voice Vote.", 
              "number": "H R 3562", 
              "sponsor_id": "A000375", 
              "title": "To amend title 38, United States Code, to authorize the Secretary of Veterans Affairs to furnish assistance for adaptations of residences of veterans in rehabilitation programs under chapter 31 of such title, and for other purposes."
            }, 
            "chamber": "House", 
            "congress": "115", 
            "date": "2017-11-06", 
            "description": "To amend title 38, United States Code, to authorize the Secretary of Veterans Affairs to furnish assistance for adaptations of residences of veterans in rehabilitation programs under chapter 31 of ...", 
            "member_id": "L000287", 
            "position": "Yes", 
            "question": "On Motion to Suspend the Rules and Pass", 
            "result": "Passed", 
            "roll_call": "607", 
            "session": "1", 
            "time": "18:53:00", 
            "total": {
              "no": 0, 
              "not_voting": 32, 
              "present": 0, 
              "yes": 400
            }, 
            "vote_uri": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/607.json"
          }, 
          {
            "amendment": {}, 
            "bill": {
              "bill_id": "hr3922-115", 
              "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr3922.json", 
              "latest_action": "Motion to reconsider laid on the table Agreed to without objection.", 
              "number": "H R 3922", 
              "sponsor_id": "W000791", 
              "title": "To extend funding for certain public health programs, and for other purposes."
            }, 
            "chamber": "House", 
            "congress": "115", 
            "date": "2017-11-03", 
            "description": "Community Health and Medical Professionals Improve Our Nation Act of 2017", 
            "member_id": "L000287", 
            "position": "No", 
            "question": "On Passage", 
            "result": "Passed", 
            "roll_call": "606", 
            "session": "1", 
            "time": "11:06:00", 
            "total": {
              "no": 174, 
              "not_voting": 16, 
              "present": 0, 
              "yes": 242
            }, 
            "vote_uri": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/606.json"
          }, 
          {
            "amendment": {}, 
            "bill": {
              "bill_id": "hr3922-115", 
              "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr3922.json", 
              "latest_action": "Motion to reconsider laid on the table Agreed to without objection.", 
              "number": "H R 3922", 
              "sponsor_id": "W000791", 
              "title": "To extend funding for certain public health programs, and for other purposes."
            }, 
            "chamber": "House", 
            "congress": "115", 
            "date": "2017-11-03", 
            "description": "Community Health and Medical Professionals Improve Our Nation Act of 2017", 
            "member_id": "L000287", 
            "position": "Yes", 
            "question": "On Motion to Recommit with Instructions", 
            "result": "Failed", 
            "roll_call": "605", 
            "session": "1", 
            "time": "10:58:00", 
            "total": {
              "no": 231, 
              "not_voting": 14, 
              "present": 0, 
              "yes": 187
            }, 
            "vote_uri": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/605.json"
          }
        ]
      }
    }
```