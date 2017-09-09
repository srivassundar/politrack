import { Injectable } from '@angular/core';

import { Official, Resource } from './official';
import { OFFICIALS } from './data/officials';

@Injectable()
export class OfficialService {
  official_list: Official[] = OFFICIALS;
  selected_official: Official; // used for official_delail page
  search_keyword : string;

  searchOfficials(keyword: string) : Promise<Official[]> {
    this.official_list = [];
    this.search_keyword = keyword;
    console.log("Searching results for " + this.search_keyword);
    // SEARCH HERE !!!!!

    this.official_list = null;  //<replace null with Search result, type: Official[]>
    return this.getOfficials();
  }

  // save_keyword(keyword: string) {
  //   this.search_keyword = keyword;
  //   console.log("Recieved search keyword: " + this.search_keyword);
  // }

  getSearchKeyword() {
    console.log("Keyword is " + this.search_keyword);
    return this.search_keyword;
  }

  getOfficials(): Promise<Official[]> {
    return Promise.resolve(this.official_list);
  }

  getOfficial(id: number): Promise<Official> {
    return this.getOfficials()
               .then(officials => this.official_list.find(official => official.id === id));
  }

  getOfficialByCategory(categryID: number): Promise<Official> {
    var self = this;
    return this.getOfficials()
               .then(officials => self.official_list.find(official => official.category === categryID));
  }

  getListLength() : number {
    return this.official_list.length;
  }

  saveOfficial(new_official) {
    this.official_list.push(new_official);
  }
}
