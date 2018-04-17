import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
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
    this.navCtrl.setRoot(this.tabsPage)
  }

  swiped(event) {
    // Place this in DOM: (swipe)="swipe($event)"
    console.log("EVENT",event)
    if(event.deltaX <= 0) {
      // this.navCtrl.parent.select(1);
      console.log("Swipe left")
    }
    else if(event.deltaX >= 0){
      console.log("Swipe right")
    }
  }

  pressed(event) {
    console.log("EVENT",event)

  }

  openPage(page){
    this.navCtrl.push(page);
  }


}
