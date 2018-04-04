import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../../../providers/firebase/firebase';

import { AuthProvider } from '../../../../providers/auth/auth';
/**
 * Generated class for the CreateAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-app',
  templateUrl: 'create-app.html',
})
export class CreateAppPage {

  title: string;
  image: string;
  description: string
  published: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseProvider: FirebaseProvider  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAppPage');
  }

  addApp() {
    var data = {
      title:this.title,
      image:this.image,
      description:this.description
    }
     this.firebaseProvider.addApp(data);
   }

   removeApp(id) {
     this.firebaseProvider.removeApp(id);
   }

}
