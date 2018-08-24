import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  //   styleUrls: ['form-select.component.scss'],
  template: `
    <ion-item 
      class="dynamic-field" 
      [formGroup]="group" no-padding>
      <ion-label stacked>{{ config.label }}</ion-label>
      <ion-select [formControlName]="config.name" [multiple]="config.multiple" [placeholder]="config.placeholder">
        <ion-option *ngFor="let option of config.options" [value]="option">
          {{ option }}
        </ion-option>
      </ion-select>
    </ion-item >
    `,
})
// <label>{{ config.label }}</label>
// <select [formControlName]="config.name">
//   <option value="">{{ config.placeholder }}</option>
//   <option *ngFor="let option of config.options">
//     {{ option }}
//   </option>
// </select>
export class FormSelectComponent {
  config;
  group: FormGroup;
}