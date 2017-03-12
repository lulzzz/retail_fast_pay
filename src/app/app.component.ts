import {Component, OnInit} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginComponent} from "../pages/login/login";


@Component({
             templateUrl: 'app.html'
           })
export class MyApp implements OnInit {
  private rootPage: any;
  
  ngOnInit(): void {
    if (!Meteor.userId())
      this.rootPage = LoginComponent;
    else
      this.rootPage = TabsPage;
  }
  
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
  
}
