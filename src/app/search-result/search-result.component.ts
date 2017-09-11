import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
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
  selectedOfficial: Official;

  constructor(
    private officialService: OfficialService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.officialService.searchOfficials(this.http, params['keyword'])
        .subscribe(official_list => {
          console.log('in search result compt');
          console.log(official_list);
          this.search_result = official_list;
        })
    );
    this.search_keyword = this.officialService.getSearchKeyword();
  }

  // search_officials(): void {
  //   this.officialService.searchOfficials().then(search_result => {
  //       this.search_result = search_result;
  //     });
  // }

  onSelect(official: Official): void {
    this.selectedOfficial = official;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',
  this.selectedOfficial.id])
  }

}

