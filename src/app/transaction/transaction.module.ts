import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { GrowlModule } from 'primeng/growl';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    GrowlModule,
    ConfirmDialogModule,

    CurrencyMaskModule,
  ],
  declarations: [
    TransactionFormComponent,
    TransactionSearchComponent
  ], 
  exports: [
    TransactionFormComponent,
    TransactionSearchComponent
  ]
})
export class TransactionModule { }
