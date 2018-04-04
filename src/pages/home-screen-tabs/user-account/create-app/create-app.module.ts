import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAppPage } from './create-app';

@NgModule({
  declarations: [
    CreateAppPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAppPage),
  ],
})
export class CreateAppPageModule {}
