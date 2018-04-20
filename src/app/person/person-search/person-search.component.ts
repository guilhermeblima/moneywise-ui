import { PersonService, PersonFilter } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent{
  
  constructor(private personService: PersonService){}

  totalElements = 0;
  filter = new PersonFilter();
  persons = [];

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
}
