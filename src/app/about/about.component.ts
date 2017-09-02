import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./../app.component.css'],
})

export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }


  // onSelect(): void {
  //   // this.selectedProject = project;
  // }

  // nextStep(): void {
  //   this.step = this.step + 1;
  //   // if (this.step > 3)
  //   // {
  //   //   this.submit_project();
  //   // }
  // }

  // previousStep(): void {
  //   this.step--;
  // }

  // goBack(): void {
  //   this.location.back();
  // }

}

