import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  findAllSummary():Observable<any>{
    return this.http.get(`${this.serviceUrl}?summary`, this.httpOptions);
  }

}
