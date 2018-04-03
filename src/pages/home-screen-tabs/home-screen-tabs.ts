import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { HomeScreenPage } from '../home-screen/home-screen';

/**
 * Generated class for the HomeScreenTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-screen-tabs',
  templateUrl: 'home-screen-tabs.html',
})
export class HomeScreenTabsPage {
  tab1Root = 'HomeScreenPage';
  tab2Root = 'HomeScreenPage';
  tab3Root = 'HomeScreenPage';  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeScreenTabsPage');
  }

}
