import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgStyle}           from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { OfficialService } from './../official.service';
import { Official } from './../official';
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
  facebook_path: string = "https://facebook.com"
  twitter_path: string = "https://twitter.com";
  youtube_path: string = "https://youtube.com";

  constructor(
    private officialService: OfficialService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    var self = this;
    if (this.input_official == undefined) {
      this.route.params.subscribe(
        params => this.officialService.searchOfficials(this.http, params['name'])
          .subscribe(official_list => {
            this.search_result = official_list;
            this.official = official_list.find(official => official.name === params['name']);
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

  goBack(): void {
    this.location.back();
  }

}