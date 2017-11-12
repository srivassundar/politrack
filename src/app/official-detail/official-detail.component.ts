import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgStyle} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer } from '@angular/platform-browser';
import { OfficialService } from './../official.service';
import { Official, OfficialDetail, OfficialBills } from './../official';
import { TagContentType } from '@angular/compiler';
import { Binary } from 'selenium-webdriver/firefox';

@Component({
  selector: 'official-detail',
  templateUrl: './official-detail.component.html',
  styleUrls: ['./official-detail.component.css']
})

export class OfficialDetailComponent implements OnInit {
  @Input() input_official: Official;
  official: Official;
  initialize: boolean;
  search_result: Official[];
  detail_result: OfficialDetail[];
  votes_result: OfficialBills[]; // data for votes
  bills_Items; // list of the bills
  pageBillIndex: number[]; // number array for total pages
  pageVoteIndex: number[]; // number array for for total pages
  pagesBills: number;
  pagesVotes: number;
  currentBill: number;
  currentVote: number;
  votes_Items; // list of the votes
  bills_result: OfficialBills[]; // data for bills
  biography: string;
  loaded_finances: boolean;
  finance_result: Object;

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
    this.initialize = true;
    const self = this;
    this.loaded_finances = false;
    if (this.input_official === undefined) {
      this.route.params.subscribe(
        params => this.officialService.searchOfficials(this.http, params['name'])
          .subscribe(official_list => {
            this.search_result = official_list;
            this.official = official_list.find(official => official.name === params['name']);
            this.getOfficalDetail();
            this.getBills();
            this.getFinanceData();
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
   * Function to get all the bill information of an official when the corresponding tab is clicked.
   */
  getBills() {
    if (this.initialize) {
      let billNum, voteNum;
      const calculatePage = function (pageSize: number, numberOfPages: number): number {
        let division, remainder;
        division = numberOfPages / pageSize;
        division = Math.floor(division);
        remainder = numberOfPages % pageSize;
        division = (remainder === 0) ? division : division + 1;
        return division;
      };
      this.officialService.billsVotesSearchOfficial(this.http, this.official.id).subscribe(bills_votes => {
        // initialization of data
        this.votes_result = bills_votes['votes_info'];
        this.bills_result = bills_votes['bills_info'];
        billNum = this.bills_result['num_results'];
        voteNum = this.votes_result['num_results'];
        // calculating the amount of pages needed for tables
        this.pagesBills = calculatePage(5, billNum);
        this.setBillPage(1);
        this.pageBillIndex = this.fillBillArray(this.pagesBills);
        this.pagesVotes = calculatePage(5, voteNum);
        this.setVotePage(1);
        this.pageVoteIndex = this.fillBillArray(this.pagesVotes);
      });
      this.initialize = false;
    }
  }

  /**
   * Used to iterate through the number of pages available.
   */
  fillBillArray(numPages: number) {
    const array = new Array();
    for (let index = 1; index < numPages + 1; index++) {
      array.push(index);
    }
    return array;
  }

  /**
   * Updates the current page and refreshes the table.
   * @param index is the current page number being accessed
   */
  setBillPage(index: number) {
    this.currentBill = index;
    this.bills_Items = this.bills_result['bills'].slice((this.currentBill - 1) * 5, (this.currentBill) * 5);
  }
  /**
   * Updates the current page and refreshes the table.
   * @param index is the current page number being accessed
   */
  setVotePage(index: number) {
    this.currentVote = index;
    this.votes_Items = this.votes_result['votes'].slice((this.currentVote - 1) * 5, (this.currentVote) * 5);
  }

  /**
   * Function to display A date in the format of Month Day, Year.
   * @param date1 String of a date can be in format of what Date function can allow but must have
   * month day and year to function properly.
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
        this.finance_result['summary'] = this.finance_result['summary']['@attributes'];
        console.log(this.finance_result);
      });
    }
    this.loaded_finances = true;
  }

  goBack(): void {
    this.location.back();
  }

}
