import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [OfficialService]
})

export class SearchResultComponent implements OnInit {
  search_keyword: string;
  search_result: Official[];
  officials: Official[];
  selectedOfficial: Official;
  key: string;
  democrat: boolean;
  republican: boolean;
  independent:boolean;

  constructor(
    private officialService: OfficialService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  
  
  /**
   * Function to retrieve all politicians matching the search criteria.
   */
  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.officialService.searchOfficials(this.http, params['keyword'])
        .subscribe(official_list => {
          this.search_result = official_list;
          this.officials = official_list;
        })
    );
    this.search_keyword = this.officialService.getSearchKeyword();
  }
  
  sort(sortBy: String): void {
    if (sortBy === "firstName") {
      this.search_result.sort(function(a, b) {
      	var nameA = a.first_name, nameB = b.first_name;
      	if (nameA < nameB) {
       		return -1; 
      	}
      	if (nameA > nameB) {
      		return 1;
      	}
      	nameA = a.last_name, nameB = b.last_name;
      	if (nameA < nameB) {
       		return -1; 
      	}
      	if (nameA > nameB) {
      		return 1;
      	}
      	return 0;
      });
    } 
    if (sortBy === "lastName") {
      this.search_result.sort(function(a, b) {
      	var nameA = a.last_name, nameB = b.last_name;
      	if (nameA < nameB) {
       		return -1; 
      	}
      	if (nameA > nameB) {
      		return 1;
      	}
      	nameA = a.first_name, nameB = b.first_name;
      	if (nameA < nameB) {
       		return -1; 
      	}
      	if (nameA > nameB) {
      		return 1;
      	}
      	return 0;
      });
    }
  }
  
  filter(): void {
    if (!this.democrat && !this.republican && !this.independent || this.democrat && this.republican && this.independent) {
      this.search_result = this.officials;
    }
    else {
      this.search_result = [];
      if (this.democrat) {
        this.search_result = this.officials.filter(official => official.party === "D");
      } 
      if (this.republican) {
        this.search_result = this.officials.filter(official => (official.party === "R" || this.search_result.indexOf(official) != -1));
      }
      if (this.independent) {
        this.search_result = this.officials.filter(official => (official.party === "I" || this.search_result.indexOf(official) != -1));
      } 
    }
  }
}

