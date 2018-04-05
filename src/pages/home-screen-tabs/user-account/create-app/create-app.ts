import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
              public firebaseProvider: FirebaseProvider,
              public toastCtrl: ToastController) {
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
     this.appCreatedToast();
   }

   removeApp(id) {
     this.firebaseProvider.removeApp(id);
   }





   appCreatedToast() {
    let toast = this.toastCtrl.create({
      message: 'App created successfully',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  titleRequiredToast() {
   let toast = this.toastCtrl.create({
     message: 'Title Required.',
     position: 'bottom',
     showCloseButton: true,
   });

   toast.onDidDismiss(() => {
     console.log('Dismissed toast');
   });

   toast.present();
 }

 imageRequiredToast() {
  let toast = this.toastCtrl.create({
    message: 'Image Required.',
    position: 'bottom',
    showCloseButton: true,
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

descriptionRequiredToast() {
 let toast = this.toastCtrl.create({
   message: 'Description Required.',
   position: 'bottom',
   showCloseButton: true,
 });

 toast.onDidDismiss(() => {
   console.log('Dismissed toast');
 });

 toast.present();
}

}
