import { Component, OnInit, ViewChild } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ],
  providers: [OfficialService]
})

export class HomepageComponent implements OnInit {
  keyword: string;
  invalid = false;

  searchForm: NgForm;

  constructor(private router: Router,
              private officialService: OfficialService) { }


  ngOnInit(): void {
    // this.keyword = "";
  }

  onClick(): void {
    this.search();
  }

  onEnter(): void {
    this.search();
  }

  search(): void {
    if (this.keyword && this.keyword.length > 0) {
      this.router.navigate(['/search', this.keyword]);
    } else {
      this.invalid = true;
      console.log("set invalid");
    }
  }

}