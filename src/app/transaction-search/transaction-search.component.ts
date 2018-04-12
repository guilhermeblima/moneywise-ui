import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent {

  transactions = [
    {
      person:'Gandalf Gray', title: 'Groceries', paymentDue: '12/04/2018', paymentDate: '12/04/2018', total: 104.34, type: 'DEPOSIT'
    },
    {
      person:'Bilbo Baggins', title: 'Dark weed', paymentDue: '03/05/2018', paymentDate: '10/03/2018', total: 28.99, type: 'WITHDRAWAL'
    },
    {
      person:'Frodo Baggins', title: 'Haircut', paymentDue: '08/04/2018', paymentDate: '08/04/2018', total: 45.00, type: 'DEPOSIT'
    },
  ];
}
