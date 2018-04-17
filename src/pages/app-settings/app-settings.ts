import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AppSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-settings',
  templateUrl: 'app-settings.html',
})
export class AppSettingsPage {

  currentApp;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseProvider: FirebaseProvider,
              public toastCtrl: ToastController) {

    this.currentApp = ""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppSettingsPage');
  }

  follow(app){
    this.firebaseProvider.followApp(app);
  }

}
