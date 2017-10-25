import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Official, OfficialDetail } from './official';

@Injectable()
export class OfficialService {
  detail_list: OfficialDetail[];
  selected_official: Official; // used for official_delail page
  search_keyword: string;

  /**
   * Function to retrieve the officials list from the back-end server.
   * @param http The http client that the search query will be running on.
   * @param keyword String of the word(s) that the user is searching for.
   * @return An Observable object containing an array of all officials matching the search criteria
   */
  searchOfficials(http: HttpClient, keyword: string): Observable<Official[]> {
    this.official_list = [];
    this.search_keyword = keyword;
    http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } ).subscribe(data => {
      this.official_list.push(data['officials']);
    });
    return http.get('/api/v0/officials', { params: new HttpParams().set('query', keyword) } )
      .map(data => data['officials']);
  }

  /**
   * Function to retrieve the official details list from the back-end server.
   * @param http The http client that the search query will be running on.
   * @param keyword String of the word(s) that the user is searching for.
   * @return An Observable object containing an array of all officials matching the search criteria
   */
  detailSearchOfficials(http: HttpClient, keyword: string): Observable<OfficialDetail[]> {
    this.detail_list = [];
    this.search_keyword = keyword;
    http.get('/api/v0/details', { params: new HttpParams().set('id', keyword) } ).subscribe(data => {
      this.detail_list.push(data['bio']);
      this.detail_list.push(data['office']);
    });
    return http.get('/api/v0/details', { params: new HttpParams().set('id', keyword) } )
      .map(data => data['bio']);
  }

  /**
   * Function to retrieve the word(s) that the user is searching by
   * @return The word(s) the user is searching by
   */
  getSearchKeyword() {
    return this.search_keyword;
  }

  getOfficials(): Promise<Official[]> {
    return Promise.resolve(this.official_list);
  }

  getOfficial(name: string): Promise<Official> {
    return this.getOfficials()
               .then(officials => this.official_list.find(official => official.name === name));
  }

}
