import { MessageService } from 'primeng/components/common/messageservice';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }
  
  handler(error: any){
    console.log(error);
    if(error instanceof HttpErrorResponse && 
      (error.status > 399 && error.status < 500) ){
        this.messageService.add({severity:'error', summary:'Something went wrong', detail:`${error.error[0] ? error.error[0].message : error.error.message }`})
    }else{
      this.messageService.add({severity:'error', summary:'Error Message', detail:`Something bad happened; please try again later.`})
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
