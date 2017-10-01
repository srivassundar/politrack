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