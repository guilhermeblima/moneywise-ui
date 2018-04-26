import { ErrorHandlerService } from './../core/error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import * as moment from 'moment';
import { Transaction } from '../core/model';

export class TransactionFilter{
  title: string;
  dateTo: Date;
  dateFrom: Date;
  page = 0;
  pageSize = 1;
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

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
    ) { }

  findAllSummary(filter:TransactionFilter):Observable<any>{
    let params = `&page=${filter.page}&size=${filter.pageSize}`;
    if(filter.title){
      params = `&title=${filter.title}`;
    }
    if(filter.dateFrom){
      params = `&dateFrom=${moment(filter.dateFrom).format('YYYY-MM-DD')}`;
    }
    if(filter.dateTo){
      params = `&dateTo=${moment(filter.dateTo).format('YYYY-MM-DD')}`;
    }
    
    return this.http.get(`${this.serviceUrl}?summary${params}`, this.httpOptions)
          .catch(error => this.errorHandlerService.handler(error));
  }

  delete(id: number): Observable<{}>{
    return this.http.delete(`${this.serviceUrl}/${id}`, this.httpOptions)
    .catch(error => this.errorHandlerService.handler(error))
  }

  save(transaction: Transaction){
    return this.http.post(this.serviceUrl, transaction, this.httpOptions)
            .catch(error => this.errorHandlerService.handler(error));
  }

}
