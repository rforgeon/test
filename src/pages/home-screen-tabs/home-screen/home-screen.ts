import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-screen',
  templateUrl: 'home-screen.html',
})
export class HomeScreenPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
                  {image:"https://is2-ssl.mzstatic.com/image/thumb/Purple62/v4/fa/d8/6c/fad86c2d-50a2-a0b9-881f-199f7bb2ada6/AppIcon-1x_U007emarketing-85-220-0-6.png/246x0w.jpg",
                  title:"Ralph"}
                 ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeScreenPage');
  }

}
