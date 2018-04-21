import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ErrorHandlerService } from './../core/error-handler.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  resourceUrl = 'http://localhost:8080/categories';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic YWRtaW5AbW9uZXl3aXNlLmNvbTphZG1pbg=='
    })
  }

  findAll(){
    return this.http.get(this.resourceUrl, this.httpOptions)
            .catch(error => this.errorHandlerService.handler(error))
  }

}
