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
      <ion-checkbox [formControlName]="config.name"  ></ion-checkbox>
    </ion-item >
  `,
})
export class FormCheckboxComponent {
  config;
  group: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.config,)
  }
}