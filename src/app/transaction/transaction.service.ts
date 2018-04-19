import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface TransactionFilter{
  title: string;
}

@Injectable()
export class TransactionService {

  serviceUrl = "http://localhost:8080/transactions";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic YWRtaW5AbW9uZXl3aXNlLmNvbTphZG1pbg=='
    }),
    params: new HttpParams()
  };

  constructor(private http: HttpClient) { }

  findAllSummary(filter:TransactionFilter):Observable<any>{
    if(filter.title){
      this.httpOptions.params = this.httpOptions.params.set('title',filter.title);
    }
    
    console.log(this.httpOptions)
    return this.http.get(`${this.serviceUrl}?summary`, this.httpOptions);
  }

}
