import { Component, OnInit } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ],
  providers: [OfficialService]
})

export class HomepageComponent implements OnInit {
  keyword: string;

  constructor(private router: Router,
              private officialService: OfficialService) { }

  ngOnInit(): void {
  }

  onEnter(): void {
    this.router.navigate(['/search', this.keyword]);
  }

}