import { Component, Input, OnInit } from '@angular/core';
// import { User } from './data/user';
// import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css'],
})

export class AppComponent implements OnInit {
  // user_service: UserService = null;

  constructor(
    // private userService: UserService,
  ) {}

  ngOnInit(): void {
    // this.user_service = this.userService
    // console.log(this.userService);
    // console.log('CurrUser: ' + this.user);
  }
}

