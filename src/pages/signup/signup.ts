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
  ]

}
