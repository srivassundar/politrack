import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Official, OfficialDetail, OfficialBills } from './official';

@Injectable()
export class OfficialService {
  official_list: Official[];
  detail_list: OfficialDetail[];
  bills_list: OfficialBills[];
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
   * Function to retrieve the officials bills and votes info from the server
   * @param http the http client that the search query will be running on.
   * @param keyword the id to query for a specific official
   * @return An Observable object containing the bills and votes info of an official.
   */
  billsVotesSearchOfficial(http: HttpClient, keyword: string): Observable<OfficialBills[]> {
    return http.get('/api/v0/details/votes_bills?id=' + keyword + '&votes_limit=100&bills_limit=100')
      .map(data => data);
  }


  /**
   * Function to retrieve the biography of the official from Wikipedia API.
   * @param http The http client that the search query will be running on.
   * @param The name of the official.
   * @return An Observable object containing the biography of the official.
   */
  getOfficialWiki(http: HttpClient, official_name: string) {
    let http_headers = new HttpHeaders();
    http_headers = http_headers.append('Api-User-Agent', 'PoliTrack/1.0 (lindaz@gatech.edu)');
    http_headers = http_headers.append('Content-Type', 'application/json; charset=UTF-8');

    return http.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*' , {
      params: new HttpParams().set('titles', official_name),
      headers: http_headers
    }).map(data => data['query']);
  }
  
    /**
   * Function to retrieve the finance contribution to  the politican.
   * @param http The http client that the search query will be running on.
   * @param The ud of the official.
   * @return An Observable object containing the financial contribution ro the official.
   */
  getFinances(http: HttpClient, official_id: string) {
    return http.get('/api/v0/details/finances', { params: new HttpParams().set('id', official_id) } )
      .map(data => data);
  }

  /**
   * Function to retrieve the word(s) that the user is searching by
   * @return The word(s) the user is searching by
   */
  getSearchKeyword() {
    return this.search_keyword;
  }

  /**
   * Function to retrieve the list of officials
   * @return The Promise object containing list of officials
   */
  getOfficials(): Promise<Official[]> {
    return Promise.resolve(this.official_list);
  }

  /**
   * Function to retrieve the official object from the official_list using the name of official
   * @return The official object that matches the name
   */
  getOfficial(name: string): Promise<Official> {
    return this.getOfficials()
               .then(officials => this.official_list.find(official => official.name === name));
  }

}
