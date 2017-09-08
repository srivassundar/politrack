import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Official } from './../official';
import { OfficialService } from './../official.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [OfficialService]
})

export class SearchResultComponent implements OnInit {
  title = 'Explore officials around you';
  officials: Official[];
  selectedOfficial: Official;

  constructor(
    private officialService: OfficialService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getOfficials();
  }

  getOfficials(): void {
    // this.officials = this.officialService.getOfficials();
    this.officialService.getOfficials().then(officials => {
        this.officials = officials
      });
  }

  onSelect(official: Official): void {
    this.selectedOfficial = official;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',
  this.selectedOfficial.id])
  }

}

