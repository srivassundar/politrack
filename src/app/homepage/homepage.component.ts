import { Component, OnInit } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';

@Component({
  selector: 'my-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ]
})

export class HomepageComponent implements OnInit {
  loggedIn: boolean;
  officials: Official[] = [];

  constructor(private officialService: OfficialService) { }

  ngOnInit(): void {
    this.getOfficials();
  }

  getOfficials(): void {
    this.officialService.getOfficials().then(officials => {
        this.officials = officials;
        // this.officials.forEach(function(official){
        //   this.officialService.calculateProgress(official.id);
        // });
      });
  }
}