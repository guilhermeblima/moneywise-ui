import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  transactions = [];
  title: string;

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
    this.findAllSummary();
  }

  findAllSummary(){
    this.transactionService.findAllSummary({title: this.title })
      .subscribe(data => this.transactions = data.content);
  }
}
