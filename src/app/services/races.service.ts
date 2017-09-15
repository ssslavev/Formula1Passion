import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Race {
  MRData: any;
}


@Injectable()
export class RacesService {

  constructor(private http: HttpClient) { }

  getById(id: any) {
    return this.http.get<Race>(`http://ergast.com/api/f1/2017/circuits/${id}.json`);
  }

}
