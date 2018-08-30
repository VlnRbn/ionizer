import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the MainTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html',
})
export class MainTabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = HomePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainTabsPage');
  }

}
