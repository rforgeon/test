import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../../providers/firebase/firebase';

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
  tabsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseProvider: FirebaseProvider) {

   this.firebaseProvider.getApps().subscribe((result) => {
        this.items = result;
        console.log("apps",result)
        console.log("ITEM",this.items)
    })
    this.tabsPage = 'TabsPage'

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeScreenPage');

  }

  openApp(tile){
    this.navCtrl.setRoot(this.tabsPage,{tile:tile})
  }

}
