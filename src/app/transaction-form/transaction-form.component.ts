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

  constructor(){
    this.transactionTypes = [
      {label: 'Deposit', value: 'DEPOSIT'}, 
      {label: 'Withdrawal', value: 'WITHDRAWAL'}
    ]

  }
}
