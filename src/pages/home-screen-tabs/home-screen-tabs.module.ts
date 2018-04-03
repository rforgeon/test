import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeScreenTabsPage } from './home-screen-tabs';

@NgModule({
  declarations: [
    HomeScreenTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeScreenTabsPage),
  ],
})
export class HomeScreenTabsPageModule {}
