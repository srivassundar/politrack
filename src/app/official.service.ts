import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


import { Official, OfficialDetail } from './official';
import { OFFICIALS } from './data/officials';

@Injectable()
export class OfficialService {
  official_list: Official[] = OFFICIALS;
  detail_list: OfficialDetail[];
  selected_official: Official; // used for official_delail page
  search_keyword : string;

  searchOfficials(http: HttpClient, keyword: string) : Observable<Official[]> {
    this.official_list = [];
    this.search_keyword = keyword;
    console.log("Searching results for " + this.search_keyword);
    // SEARCH HERE !!!!!
    // this.official_list = (http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
    //   .map(data => data["officials"])).subscribe((official_list) => {
    //   this.official_list = official_list;
    // });
    // this.official_list = http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
    //   .map((response: Response) => {
    //       return response.json();
    //   }).subscribe(officials => {
    //   this.official_list = officials;
    // });
    http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } ).subscribe(data => {
      this.official_list.push(data["officials"]);
    });
    console.log(this.official_list);
    return http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
      .map(data => data["officials"]);
  }
  
  detailSearchOfficials(http: HttpClient, keyword: string) : Observable<OfficialDetail[]> {
    this.detail_list = [];
    this.search_keyword = keyword;
    console.log("Searching results for " + this.search_keyword);
    // SEARCH HERE !!!!!
    // this.official_list = (http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
    //   .map(data => data["officials"])).subscribe((official_list) => {
    //   this.official_list = official_list;
    // });
    // this.official_list = http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
    //   .map((response: Response) => {
    //       return response.json();
    //   }).subscribe(officials => {
    //   this.official_list = officials;
    // });
    http.get('/api/v0/details', { params: new HttpParams().set('id', keyword) } ).subscribe(data => {
      this.detail_list.push(data["bio"]);
      this.detail_list.push(data["office"]);
    });
    console.log(this.detail_list);
    return http.get('/api/v0/details', { params: new HttpParams().set('id', keyword) } )
      .map(data => data["bio"]);
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

  getOfficial(name: string): Promise<Official> {
    return this.getOfficials()
               .then(officials => this.official_list.find(official => official.name === name));
  }

  // getOfficialByCategory(categryID: number): Promise<Official> {
  //   var self = this;
  //   return this.getOfficials()
  //             .then(officials => self.official_list.find(official => official.category === categryID));
  // }

  getListLength() : number {
    return this.official_list.length;
  }

  saveOfficial(new_official) {
    this.official_list.push(new_official);
  }
}
