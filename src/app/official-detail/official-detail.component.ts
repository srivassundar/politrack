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

  getBills() {
    if (this.initialize) {
      let billNum, voteNum, remainder, division;
      this.officialService.billsSearchOfficial(this.http, this.official.id).subscribe(bills_list => {
        this.officialService.votesSearchOfficial(this.http, this.official.id).subscribe(votes_list => {
          //Intialization of data
          this.votes_result = votes_list;
          this.bills_result = bills_list;
          this.currentBill = 1;
          this.currentVote = 1;
          billNum = this.bills_result['num_results'];
          voteNum = this.votes_result['num_results'];
          // calculating the amount of pages needed for tables
          division = billNum / 10;
          division = Math.floor(division);
          remainder = billNum % 10;
          division = (remainder === 0) ? division : division + 1;
          this.pagesBills = division;
          this.refreshBillsList();
          this.pageBillIndex = this.fillBillArray();
          division = voteNum / 10;
          division = Math.floor(division);
          remainder = voteNum % 10;
          division = (remainder === 0) ? division : division + 1;
          this.pagesVotes = division;
          this.refreshVotesList();
          this.pageVoteIndex = this.fillVotesArray();
        });
      });
      this.initialize = false;
    }
  }

  fillBillArray() {
    var array = new Array();
    for (let index = 1; index < this.pagesBills + 1; index++) {
      array.push(index);
    }
    return array;
  }

  fillVotesArray() {
    var array = new Array();
    for (let index = 1; index < this.pagesVotes + 1; index++) {
      array.push(index);
    }
    return array;
  }

  refreshBillsList() {
    this.bills_Items = this.bills_result['bills'].slice((this.currentBill - 1) * 10, (this.currentBill) * 10);
  }

  refreshVotesList() {
    this.votes_Items = this.votes_result['votes'].slice((this.currentVote - 1) * 10, (this.currentVote) * 10);
  }

  setBillPage(index: number) {
    this.currentBill = index;
    this.refreshBillsList();
  }

  setVotePage(index: number) {
    this.currentVote = index;
    this.refreshVotesList();
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

  goBack(): void {
    this.location.back();
  }

}
