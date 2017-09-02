import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
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

  constructor(
    private officialService: OfficialService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    var self = this;
    if (this.input_official == undefined) {
      this.route.params
        .switchMap((params: Params) => this.officialService.getOfficial(+params['id']))
        .subscribe(official => {
          self.official = official;
          self.category = this.categoryService.getCategory(this.official.category);
        });
    } else {
      this.official = this.input_official;
      this.input_official = null;
      // console.log(this.official);
      this.category = this.categoryService.getCategory(this.official.category);
    }
  }

  goBack(): void {
    this.location.back();
  }

}