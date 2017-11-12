import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgStyle} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer } from '@angular/platform-browser';
import { OfficialService } from './../official.service';
import { Official, OfficialDetail } from './../official';

@Component({
  selector: 'official-detail',
  templateUrl: './official-detail.component.html',
  styleUrls: ['./official-detail.component.css']
})

export class OfficialDetailComponent implements OnInit {
  @Input() input_official: Official;
  official: Official;
  search_result: Official[];
  detail_result: OfficialDetail[];
  biography: string;
  loaded_finances: boolean;
  finance_result: Object;
  facebook_path: 'https://facebook.com';
  twitter_path: 'https://twitter.com';
  youtube_path: 'https://youtube.com';

  constructor(
    private officialService: OfficialService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * Function to retrieve the official data from the back-end server
   */
  ngOnInit(): void {
    const self = this;
    this.loaded_finances = false;
    this.finance_result = [];
    if (this.input_official === undefined) {
      this.route.params.subscribe(
        params => this.officialService.searchOfficials(this.http, params['name'])
          .subscribe(official_list => {
            this.search_result = official_list;
            this.official = official_list.find(official => official.name === params['name']);
            this.getOfficalDetail();
          })
      );
    } else {
      this.official = this.input_official;
      this.input_official = null;
    }
  }

  /**
   * Function to retrieve the detailed official data from the back-end server
   */
  getOfficalDetail() {
    this.officialService.detailSearchOfficials(this.http, this.official.id).subscribe(detail_list => {
      this.detail_result = detail_list;
      this.detail_result['candidate']['spouse'] = this.detail_result['candidate']['family'].split(';')[0];
      this.detail_result['candidate']['children'] = this.detail_result['candidate']['family'].split(';')[1];
    });

    let wiki_keyword = this.official['wiki_url'];
    wiki_keyword = wiki_keyword.substr(wiki_keyword.indexOf('/wiki/') + 6); // Only gets the text after 'https://en.wikipedia.org/wiki/...'

    /* Get introduction of the official from wikipedia */
    this.officialService.getOfficialWiki(this.http, wiki_keyword).subscribe(wiki => {
      this.biography = wiki.pages[Object.keys(wiki.pages)[0]].extract;
    });
  }

  /**
   * Function to display A date in the format of Month Day, Year.
   * @param date1 String of a date can be in format of what Date fuction can allow but must have
   * month day and year to fuction properly.
   * @return The properly formatted date
   */
  displayDate(date1: string): string {
    const date2 = new Date(date1);
    const day = date2.getDate();
    const month = date2.getMonth();
    const year = date2.getFullYear();
    const array1 = ['January', 'February', 'March', 'April', 'May',
     'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return array1[month] + ' ' + day + ', ' + year;
  }

  /**
   * Function used to bypass security of New York Times url for the iframe.
   * @return The bypassed url
   */
  byPassUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.official.times_topics_url);
  }

  /**
   * Function to get the age of the politician.
   * @param date1 String of the date of birth of the politician.
   * @return The age of the politician
   */
  getAge(date1: string): string {
    const now = new Date(); // current date
    const date2 = new Date(date1); // date of official born
    let year1, year2, age;
    year1 = now.getFullYear();
    year2 = date2.getFullYear();
    if (now < date2) {
      age = (year1 - year2) - 1 ;
      return age + '';
    } else {
      age = year1 - year2;
      return age + '';
    }
  }
  
  /**
   * Function to retrieve the financial contributions to the officical from the back-end server
   */
  getFinanceData(): void {
    if (!this.loaded_finances) {
      this.officialService.getFinances(this.http, this.official.id).subscribe(finances => {
        this.finance_result = finances;
        this.finance_result['contributors'] = this.finance_result['contributors']['contributor'].map(function(value) {
          return value['@attributes'];
        });
        this.finance_result['industries'] = this.finance_result['industries']['industry'].map(function(value) {
          return value['@attributes'];
        });
        this.finance_result['sectors'] = this.finance_result['sectors']['sector'].map(function(value) {
          return value['@attributes'];
        });
        console.log(this.finance_result);
      });
    }
    this.loaded_finances = true;
  }

  goBack(): void {
    this.location.back();
  }

}
