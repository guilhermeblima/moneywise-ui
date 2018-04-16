import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';

import { AppComponent } from './app.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TransactionSearchComponent,
    NavBarComponent,
    PersonSearchComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
