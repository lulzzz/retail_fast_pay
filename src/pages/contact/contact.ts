import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {LoginComponent} from "../login/login";

@Component({
             selector: 'page-contact',
             templateUrl: 'contact.html'
           })
export class ContactPage {
  
  constructor(public navCtrl: NavController) {
    
  }
  
  signout() {
    Meteor.logout(() => {
      this.navCtrl.setRoot(LoginComponent, {}, {
        animate: true
      });
    })
  }
}
