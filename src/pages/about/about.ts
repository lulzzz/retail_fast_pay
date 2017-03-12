import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AppService} from "../../app/app.service";
import {UserCollection} from "../../services/ddp/collections/users";

@Component({
             selector: 'page-about',
             templateUrl: 'about.html'
           })
export class AboutPage implements OnInit {
  users = [];
  
  constructor(public navCtrl: NavController,
              protected appService: AppService,
              protected userCollection: UserCollection) {
    
  }
  
  ngOnInit(): void {
    this.userCollection
        .getCollectionObservable()
        .subscribe((collection) => {
          this.users = collection.collection.find().fetch();
        });
  }
  
}
