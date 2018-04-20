import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

export interface TransactionFilter{
  title: string,
  dateTo: Date,
  dateFrom: Date
}

@Injectable()
export class TransactionService {

  serviceUrl = "http://localhost:8080/transactions";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic YWRtaW5AbW9uZXl3aXNlLmNvbTphZG1pbg=='
    })
  };

  constructor(private http: HttpClient) { }

  findAllSummary(filter:TransactionFilter):Observable<any>{
    let params = '';
    if(filter.title){
      params = `&title=${filter.title}`;
    }
    if(filter.dateFrom){
      params = `&dateFrom=${moment(filter.dateFrom).format('YYYY-MM-DD')}`;
    }
    if(filter.dateTo){
      params = `&dateTo=${moment(filter.dateTo).format('YYYY-MM-DD')}`;
    }
    
    return this.http.get(`${this.serviceUrl}?summary${params}`, this.httpOptions);
  }

}
