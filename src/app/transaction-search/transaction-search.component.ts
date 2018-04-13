import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent {

  transactions = [
    {
      person:'Gandalf Gray', title: 'Groceries', paymentDue: new Date(2017,4,23), paymentDate: new Date(2017,4,23), total: 1104.34, type: 'DEPOSIT'
    },
    {
      person:'Bilbo Baggins', title: 'Dark weed', paymentDue:  new Date(2018,3,6), paymentDate: new Date(2017,4,23), total: 28.99, type: 'WITHDRAWAL'
    },
    {
      person:'Frodo Baggins', title: 'Haircut', paymentDue:  new Date(2018,3,21), paymentDate: new Date(2017,4,23), total: 45.00, type: 'DEPOSIT'
    },
  ];
}
