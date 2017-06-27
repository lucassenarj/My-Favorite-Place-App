import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage } from '../pages/new-place/new-place';
import { PlacesService } from "../services/places.service";
import { PlacePage } from '../pages/place/place';
import { AboutPage } from '../pages/about/about';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBts1kMaCe8Nm-4qURqkfz4iFgBTHIfFA0'
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, PlacesService, Storage]
})
export class AppModule {}
