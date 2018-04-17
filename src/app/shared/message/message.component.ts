import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
      <div *ngIf="hasError()" class="ui-message ui-messages-error">
        {{message}}
      </div>  
  `,
  styles: [`
    .ui-messages-error{
      margin: 0;
      margin-top: 4px;
    }
    `]
})
export class MessageComponent {

  @Input() control: FormControl;
  @Input() error: string;
  @Input() message: string;

  hasError(){
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
