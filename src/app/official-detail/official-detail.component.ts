import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgStyle}           from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer } from '@angular/platform-browser';

import { OfficialService } from './../official.service';
import { Official, OfficialDetail } from './../official';
import { Category } from './../category';
import { CategoryService } from './../category.service';

@Component({
  selector: 'official-detail',
  templateUrl: './official-detail.component.html',
  styleUrls: ['./official-detail.component.css']
})


export class OfficialDetailComponent implements OnInit {
  @Input() input_official: Official;
  official: Official;
  category: Category = {
    id: -1,
    name: "Select Category",
    type: true,
    description: ""
  };
  search_result: Official[];
  detail_result: OfficialDetail[];
  facebook_path: string = "https://facebook.com";
  twitter_path: string = "https://twitter.com";
  youtube_path: string = "https://youtube.com";

  constructor(
    private officialService: OfficialService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    var self = this;
    if (this.input_official == undefined) {
      this.route.params.subscribe(
        params => this.officialService.searchOfficials(this.http, params['name'])
          .subscribe(official_list => {
            this.search_result = official_list;
            this.official = official_list.find(official => official.name === params['name']);
            this.officialService.detailSearchOfficials(this.http, this.official.id).subscribe(detail_list => {this.detail_result = detail_list;
              this.detail_result["candidate"]["spouse"] = this.detail_result["candidate"]["family"].split(';')[0];
              this.detail_result["candidate"]["children"] = this.detail_result["candidate"]["family"].split(';')[1];
            })
          })
      );
      console.log(this.official);
        // .subscribe(official => {
        //   self.official = official;
        //   console.log(this.official);
          // self.category = this.categoryService.getCategory(this.official.category);
        // });
      // this.route.params
      //     .switchMap((params: Params) => 
      //     self.official = params['official_list'][params['name']]);
      console.log(this.search_result);
    } else {
      this.official = this.input_official;
      console.log(this.official);
      this.input_official = null;
      // this.category = this.categoryService.getCategory(this.official.category);
    }
  }
  /**
   * Function to display A date in the format of Month, day year
   * @param date1 String of a date can be in format of what Date fuction can allow but must have
   * month day and year to fuction properly.
   */
  displayDate(date1: string): string {
    let date2 = new Date(date1);
    let day = date2.getDate();
    let month = date2.getMonth();
    let year = date2.getFullYear();
    const array1 = ['January', 'February', 'March', 'April', 'May',
     'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return array1[month] + ' ' + day + ', ' + year;
  }
  /**
   * function used to bypass security of new york times url for the iframe.
   */
  byPassUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.official.times_topics_url);
  }

  getAge(date1: string): string {
    let now = new Date(); // current date
    let date2 = new Date(date1); // date of official born
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