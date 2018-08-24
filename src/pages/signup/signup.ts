import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  config = [
    {
      type: 'input',
      label: 'First name',
      name: 'first',
      placeholder: 'Enter your first name',
      validation: [Validators.required, Validators.minLength(4)],
      value: '',
      disabled : false
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'last',
      placeholder: 'Enter your last name',
      validation: [Validators.required, Validators.minLength(4)],
      value: '',
      disabled : false
    },
    {
      type: 'select',
      multiple: 'false',
      label: 'Gender',
      name: 'gender',
      placeholder: 'Select your gender',
      options: [ 'male', 'female', 'special'],
      validation: [Validators.required],
      value: '',
      disabled : false
    },
    {
      type: 'checkbox',
      label: 'Married',
      name: 'married',
      placeholder: 'Check if you are maried',
      validation: [Validators.required],
      value: false,
      disabled : false
    },
    {
      type: 'select',
      multiple: 'true',
      label: 'travel mode',
      name: 'travel',
      placeholder: 'How do you travel to office?',
      options: [ 'car', 'bike', 'bus'],
      validation: [Validators.required],
      value: '',
      disabled : false
    },
  ]

  signup(form){
    console.log(form)
  }

}
