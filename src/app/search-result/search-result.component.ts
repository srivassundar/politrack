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

  // Sorting
  sortBy: string;

  // Filters
  democrat: boolean;
  republican: boolean;
  independent: boolean;
  states = {};

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

          // Initialize states checkboxes
          this.init_states();
        })
    );
    this.search_keyword = this.officialService.getSearchKeyword();
    this.sortBy = 'relevance'; // Default

  }

  sort(): void {
    console.log('Sorting by ' + this.sortBy);
    if (this.sortBy === 'relevance') {
      this.search_result = this.officials;
      this.filter();
    } else if (this.sortBy === 'firstName') {
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
    } else if (this.sortBy === 'lastName') {
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
    };
  }

  filter(): void {
    // Filter by party
    if (!this.democrat && !this.republican && !this.independent || this.democrat && this.republican && this.independent) {
      this.search_result = this.officials;
    } else {
      this.search_result = [];
      if (this.democrat) {
        this.search_result = this.officials.filter(official => official.party === 'D');
      }
      if (this.republican) {
        this.search_result = this.officials.filter(official => (official.party === 'R' || this.search_result.indexOf(official) !== -1));
      }
      if (this.independent) {
        this.search_result = this.officials.filter(official => (official.party === 'I' || this.search_result.indexOf(official) !== -1));
      }
    }

    // Filter by states
    let all_unchecked = true;
    for (var key in this.states) {
      if (this.states[key]) {
        all_unchecked = false;
        break;
      }
    }
    if (!all_unchecked) {
      this.search_result = this.search_result.filter( official => this.states[official.state], this);
    }

    // Sort after filtering
    if (this.sortBy !== 'relevance') {
      this.sort();
    }
  }

  filter_state(state_checked: string): void {
    this.states[state_checked] = !this.states[state_checked];
    this.filter();
  }

  clear_filter(): void {
    this.democrat = false;
    this.republican = false;
    this.independent = false;
    Object.keys(this.states).forEach(function(key) {
        this.states[key] = false;
    }, this);
    console.log(this.states);
    this.filter();
  }

  init_states(): void {
    this.officials.forEach( function (official) {
      this.states[official.state] = false;
    }, this);
  }
}
