import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { PersonService, PersonFilter } from './../person.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent{
  
  constructor(
    private personService: PersonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ){}

  totalElements = 0;
  filter = new PersonFilter();
  persons = [];
  @ViewChild('table') grid;

  findByFilterSummary(page = 0){
    this.filter.page = page;
    this.personService.findByFilterSummary(this.filter)
      .subscribe(result => {
        this.persons = result.content;
        this.totalElements = result.totalElements;
      })
  }

  onPageChange(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.findByFilterSummary(page);
  }

  changeStatus(person: any){
    this.personService.changeStatus(person.id, !person.active)
      .subscribe(() => {
        person.active = !person.active;
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Status has been changed'});
      });
  }

  delete(person : any){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.personService.delete(person.id)
        .subscribe(() => {
          if(this.grid.first === 0){
            this.findByFilterSummary();
          }else{
            this.grid.first = 0;
          }
          --this.totalElements;
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Person has been deleted'})
        })
      }
    });
  }
}
 