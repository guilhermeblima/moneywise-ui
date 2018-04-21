import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { TransactionService, TransactionFilter } from './../transaction.service';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  totalElements = 0;
  filter = new TransactionFilter();
  transactions = [];
  @ViewChild('table') grid;

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
   // this.findAllSummary(); -- not necessary as LazyLoad event will retrive data when page loads
  }

  findAllSummary(page = 0){
    this.filter.page = page;
    this.transactionService.findAllSummary(this.filter)
      .subscribe(data => {
        this.totalElements = data.totalElements;
        this.transactions = data.content;
      });
  }

  onPageChange(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.findAllSummary(page);
  }

  delete(transaction : any){
    this.transactionService.delete(transaction.id)
      .subscribe(() => {
        this.grid.first = 0;
        --this.totalElements;
      })
  }
}
