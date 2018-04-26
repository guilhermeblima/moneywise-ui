import { FormControl } from '@angular/forms';
import { PersonService } from './../person.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../core/model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private personService: PersonService
  ) { }

  person = new Person();

  ngOnInit() {
  }

  save(form: FormControl){
    this.personService.save(this.person)
    .subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Person has been added'});
      form.reset();
      this.person = new Person();
    });
  }


}
