import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { AttendancePage } from '../pages/attendance/attendance';
import { MarksPage } from '../pages/marks/marks';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { InfoPage } from '../pages/info/info';
import { DevelopersPage } from '../pages/developers/developers';
import { RulesPage } from '../pages/rules/rules';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginProvider } from '../providers/login/login';



const pages = [
  MyApp,
  ProfilePage,
  AttendancePage,
  MarksPage,
  TabsControllerPage,
  LoginPage,
  InfoPage,
  DevelopersPage,
  RulesPage
];

@NgModule({
  declarations: [
    ...pages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {

}