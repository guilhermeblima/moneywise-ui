import { ErrorHandlerService } from './error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { PersonService } from './../person/person.service';
import { TransactionService } from './../transaction/transaction.service';
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { CategoryService } from '../category/category.service';

@NgModule({
  imports: [
    CommonModule,

    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent,
    ConfirmDialogModule,
    GrowlModule
  ],
  providers: [
    TransactionService,
    PersonService,
    CategoryService,
    MessageService,
    ConfirmationService,
    ErrorHandlerService
  ]
})
export class CoreModule { }
