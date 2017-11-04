import { Component, OnInit } from '@angular/core';
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
  }
/**
 * OnValueChanged function checks to see if the keyword specified in the search bar is greater than zero.
 * if the keyword specified is greater than zero then the placeholder of search is disabled.
 */
  onValueChanged() {
    if (this.keyword && this.keyword.length > 0) {
      this.invalid = false;
    }
  }
  /**
   * onClick function navigates to search result page when search button is clicked.
   */
  onClick(): void {
    this.search();
  }
  /**
   * onEnter function navigates to search result page when the enter button is pressed.
   */
  onEnter(): void {
    this.search();
  }
  /**
   * The search function navigates to search result page and also passes in keyword typed in the search bar.
   */
  search(): void {
    if (this.keyword && this.keyword.length > 0) {
      this.router.navigate(['/search', this.keyword]);
    } else {
      this.invalid = true;
    }
  }

}
