

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TransactionModule } from './transaction/transaction.module';
import { PersonModule } from './person/person.module';
import { CoreModule } from './core/core.module';

import { TransactionService } from './transaction/transaction.service';
import { PersonService } from './person/person.service';

import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TransactionModule,
    PersonModule,
    CategoryModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
