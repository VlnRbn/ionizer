import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    // styleUrls: ['dynamic-form.component.scss'],
    template: `
    <form
      class="dynamic-form"
      [formGroup]="form">

      <div
      *ngFor="let field of config;"
      >
          <ng-container
              dynamicField
              [config]="field"
              [group]="form">
          </ng-container>
      </div>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
    }


    get formGroup(){
        return this.form
    }

    createGroup() : FormGroup {
        const group = this.fb.group({});

        this.config.forEach(control => 
            {
                console.log(control)
                group.addControl(control.name, this.createControl(control))
            })
        return group
    }

    createControl(control) {
        const { validation, value, disabled } = control;
        return this.fb.control( {value, disabled} , validation);
    }
}