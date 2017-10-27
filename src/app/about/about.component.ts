import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }
}
