import { SignupPage } from './../pages/signup/signup';
import { SiginPage } from './../pages/sigin/sigin';
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  private rootPage;
  private UserprofilePage;
  private SignupPage;
  private SiginPage;

  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.rootPage = HomePage;

    this.UserprofilePage= UserprofilePage;
    this.SignupPage = SignupPage;
    this.SiginPage = SiginPage;
}
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }
}
