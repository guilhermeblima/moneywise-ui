import { TransactionService, TransactionFilter } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  totalElements = 0;
  filter = new TransactionFilter();
  transactions = [];

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
}
