import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root2 } from '../model/mission';
import { Links } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  missionsUrl = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Root2[]> {
    return this.http.get<Root2[]>(this.missionsUrl);
  }

  getLinks(): Observable<Links[]> {
    return this.http.get<Links[]>(this.missionsUrl);
  }
}
