import { FormControl } from '@angular/forms';
import { PersonService } from './../../person/person.service';
import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng/api';

import { CategoryService } from '../../category/category.service';
import { Transaction } from '../../core/model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit{

  constructor(
    private categoryService: CategoryService,
    private personService: PersonService
  ){}

  transactionTypes: SelectItem[];

  categories = [];
  persons = [];
  transaction = new Transaction();

  ngOnInit(){
    this.transactionTypes = [
      {label: 'Deposit', value: 'DEPOSIT'}, 
      {label: 'Withdrawal', value: 'WITHDRAWAL'}
    ];
    this.loadCategories();
    this.loadPersons();
  }

  loadCategories(){
    this.categoryService.findAll()
    .subscribe(response => {
      this.categories = response.map(c =>({label: c.value, value: c.id}))
    })
  }

  loadPersons(){
    this.personService.findAll()
    .subscribe(response => {
      this.persons = response.map(p => ({label: p.name, value: p.id}))
    })
  }

  save(form: FormControl){
    console.log(this.transaction);
  }

}
