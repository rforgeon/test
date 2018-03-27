import { HttpClient } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  currentUser;
  constructor(public http: HttpClient,
              public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.currentUser = firebase.auth().currentUser;
    console.log('THIS.CURRENTUSER', this.currentUser)

  }

  getPosts() {
     return this.afd.list('/posts/');
   }

   addPost(name) {
     this.afd.list('/posts/').push({title:name,user:this.currentUser.uid});
   }

   removePost(id) {
     this.afd.list('/posts/').remove(id);
   }

}
