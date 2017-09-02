import { Injectable } from '@angular/core';

import { User, USERS } from './data/user';

@Injectable()
export class UserService {
  user_list: User[] = USERS;
  current_user: User = null;


  getCurrentUser(): User {
    return this.current_user;
  }

  getUser(id: number): User {
    return this.user_list.find(user => user.id === id);
  }

  logIn(id: number): void {
    this.current_user = this.getUser(id);
    console.log(this.current_user);
  }

  getListLength() : number {
    return this.user_list.length;
  }

  newUser(new_user) {
    this.user_list.push(new_user);
  }
}
