import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule
  ],
  declarations: [
    PersonFormComponent,
    PersonSearchComponent
  ],
  exports: [
    PersonFormComponent,
    PersonSearchComponent
  ]
})
export class PersonModule { }
