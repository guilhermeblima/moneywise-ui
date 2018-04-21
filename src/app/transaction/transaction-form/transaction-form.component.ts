import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng/api';

import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit{

  constructor(
    private categoryService: CategoryService
  ){}

  transactionTypes: SelectItem[];

  selectedType: string;
  selectedCategory: number;
  selectedPerson: number;

  categories = [];

  persons = [
    {label: 'Frodo Baggins', value: 1},
    {label: 'Bilbo Baggins', value: 2},
    {label: 'Gandalf Grey', value: 3},
    {label: 'Legolas Greenleaf', value: 4}
  ];

  ngOnInit(){
    this.transactionTypes = [
      {label: 'Deposit', value: 'DEPOSIT'}, 
      {label: 'Withdrawal', value: 'WITHDRAWAL'}
    ]
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.findAll()
    .subscribe(response => {
      this.categories = response.map(c =>({label: c.value, value: c.id}))
    })
  }

}
