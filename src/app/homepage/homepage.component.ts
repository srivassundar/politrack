import { Component, OnInit } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';

@Component({
  selector: 'my-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ],
  providers: [OfficialService]
})

export class HomepageComponent implements OnInit {
  // loggedIn: boolean;
  // officials: Official[] = [];
  keyword: string;

  constructor(private officialService: OfficialService) { }

  ngOnInit(): void {
    // this.getOfficials();
  }

  // getOfficials(): void {
  //   this.officialService.getOfficials().then(officials => {
  //       this.officials = officials;
  //     });
  // }

  onClick(): void {
    // this.officialService.save_keyword(this.keyword);
  }

}