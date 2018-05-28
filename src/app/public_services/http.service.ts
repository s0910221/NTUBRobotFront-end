import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  folder = 'assets';
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get<any>(this.folder + url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  postData(url, data) {
    return this.http.post<any>(this.folder + url, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

}
