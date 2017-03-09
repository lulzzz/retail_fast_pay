import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AppService} from "../../app/app.service";

@Component({
             selector   : 'page-about',
             templateUrl: 'about.html'
           })
export class AboutPage {
  
  constructor(public navCtrl: NavController, protected appService: AppService) {
    
  }
  
}
