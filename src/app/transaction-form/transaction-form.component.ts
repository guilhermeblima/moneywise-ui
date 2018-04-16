import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  transactionTypes: SelectItem[];

  selectedType: string;
  selectedCategory: number;
  selectedPerson: number;

  categories = [
    {label: 'Groceries', value: 1},
    {label: 'Haircut', value: 2},
    {label: 'Medicine', value: 3},
    {label: 'Power Bill', value: 4}
  ]

  persons = [
    {label: 'Frodo Baggins', value: 1},
    {label: 'Bilbo Baggins', value: 2},
    {label: 'Gandalf Grey', value: 3},
    {label: 'Legolas Greenleaf', value: 4}
  ]

  constructor(){
    this.transactionTypes = [
      {label: 'Deposit', value: 'DEPOSIT'}, 
      {label: 'Withdrawal', value: 'WITHDRAWAL'}
    ]

  }
}
