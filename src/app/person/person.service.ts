import { ErrorHandlerService } from './../core/error-handler.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class PersonFilter{
  name: string;
  page = 0;
  pageSize = 1;
}

@Injectable()
export class PersonService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

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
    return this.http.get<any>(`${this.urlResource}/all`, this.httpOptions);
  }

  delete(id: number){
    return this.http.delete(`${this.urlResource}/${id}`, this.httpOptions)
            .catch(error => this.errorHandlerService.handler(error))
  }

  changeStatus(id:number, status: boolean ){
    return this.http.put(`${this.urlResource}/${id}/status`, status, this.httpOptions)
            .catch(error => this.errorHandlerService.handler(error));
  }

}
