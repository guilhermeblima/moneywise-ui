
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export class PersonFilter{
  name: string;
  page = 0;
  pageSize = 1;
}

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  urlResource = 'http://localhost:8080/persons';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic YWRtaW5AbW9uZXl3aXNlLmNvbTphZG1pbg=='
    })
  }

  findByFilterSummary(filter: PersonFilter) {
    let params = `&page=${filter.page}&size=${filter.pageSize}`;
    if(filter.name){
      params = `&name=${filter.name}`;
    }
    return this.http.get<any>(`${this.urlResource}?summary${params}`, this.httpOptions);
  }

  findAll(){
    return this.http.get<any>(`${this.urlResource}`, this.httpOptions);
  }

}
