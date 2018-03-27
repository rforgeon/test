import { Component } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from './../../providers/firebase/firebase';

import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: FirebaseListObservable<any[]>;
  newPost = '';
  
  constructor(public navCtrl: NavController,
              public firebaseProvider: FirebaseProvider,
              public authProvider: AuthProvider,) {

    this.posts = this.firebaseProvider.getPosts();
  }

  async logOut(): Promise<void> {
    await this.authProvider.logoutUser();
    this.navCtrl.setRoot('LoginPage');
  }

  addPost() {
     this.firebaseProvider.addPost(this.newPost);
   }

   removePost(id) {
     this.firebaseProvider.removePost(id);
   }

}
