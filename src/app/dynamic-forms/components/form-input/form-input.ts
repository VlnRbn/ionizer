import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
//   styleUrls: ['form-input.component.scss'],
  template: `
    <ion-item 
      class="dynamic-field" 
      [formGroup]="group">
      <ion-label stacked>{{ config.label }}</ion-label>
      <ion-input
        type="text"
        [placeholder]="config.placeholder"
        [formControlName]="config.name" 
        >
      </ion-input>
    </ion-item >
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.config,)
  }
}