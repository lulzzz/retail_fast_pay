import {Component, OnInit} from '@angular/core';
import {NavController, AlertController} from "ionic-angular";
import {TabsPage} from "../tabs/tabs";

@Component({
             selector: 'login',
             templateUrl: 'login.html'
           })
export class LoginComponent implements OnInit {
  user = {
    username: "superadmin",
    password: "admin123"
  };
  
  constructor(protected navController: NavController, protected alertCtrl: AlertController) { }
  
  ngOnInit() {
    if (Meteor.user())
      this.navController.setRoot(TabsPage, {}, {
        animate: true
      });
  }
  
  signin() {
    Meteor.loginWithPassword(this.user.username, this.user.password, (err, res) => {
      if (err) {
        let alert = this.alertCtrl.create({
                                            title: 'Error',
                                            subTitle: err,
                                            buttons: ['OK']
                                          });
        alert.present();
      } else {
        this.navController.setRoot(TabsPage, {}, {
          animate: true
        });
      }
    })
  }
}
