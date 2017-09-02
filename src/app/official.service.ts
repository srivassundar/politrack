import { Injectable } from '@angular/core';

import { Official, Resource } from './official';
import { OFFICIALS } from './data/officials';

@Injectable()
export class OfficialService {
  official_list: Official[] = OFFICIALS;

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
