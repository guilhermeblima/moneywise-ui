import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip'


import { AppComponent } from './app.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonSearchComponent } from './person-search/person-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionSearchComponent,
    NavBarComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
