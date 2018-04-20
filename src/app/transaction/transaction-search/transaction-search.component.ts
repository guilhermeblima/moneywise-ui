import { TransactionService, TransactionFilter } from './../transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  transactions = [];
  title: string;
  dateFrom: Date;
  dateTo: Date;

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
    this.findAllSummary();
  }

  findAllSummary(){
    const filter: TransactionFilter = {
      title: this.title,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }
    this.transactionService.findAllSummary(filter)
      .subscribe(data => this.transactions = data.content);
  }
}
