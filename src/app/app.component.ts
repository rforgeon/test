import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { Unsubscribe } from '@firebase/util';
import { firebaseConfig } from './firebaseConfig';

import { HomeScreenPage } from '../pages/home-screen-tabs/home-screen/home-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>
  rootPage:any;


  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public menu: MenuController,
              public app: App,
              ) {


    firebase.initializeApp(firebaseConfig);
    this.pages = [
      { title: 'Home Screen', component: HomeScreenPage }
    ];

    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = 'MenuPage';
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // openPage(page) {
  //   console.log('PAGE', page.component)
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.menu.close();
  //   if (page.title == 'Home Screen'){
  //     console.log("Pop to root")
  //     this.nav.setRoot(page.component);
  //
  //
  //   }
  //   else{
  //     this.nav.setRoot(page.component);
  //   }
  //
  // }
}
