import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.comonent';
import { FormInputComponent } from './components/form-input/form-input';
import { FormSelectComponent } from './components/form-select/form-select';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { IonicModule } from 'ionic-angular';
import { FormCheckboxComponent } from './components/form-chekbox/form-checkbox';

@NgModule({
    declarations: [ 
        DynamicFieldDirective,
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormCheckboxComponent,
    ],
    imports: [ 
        IonicModule,
        CommonModule, 
        ReactiveFormsModule 
    ],
    exports: [ 
        DynamicFormComponent ,
    ],
    providers: [],
    entryComponents: [
        FormInputComponent,
        FormSelectComponent, 
        FormCheckboxComponent,
    ]
})
export class DynamicFormModule {}