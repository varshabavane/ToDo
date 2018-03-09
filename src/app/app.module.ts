import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemsPage } from '../pages/add-items/add-items';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { EditItemsPage } from '../pages/edit-items/edit-items';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemsPage,
    ItemDetailsPage,
    EditItemsPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemsPage,
    ItemDetailsPage,
    EditItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
