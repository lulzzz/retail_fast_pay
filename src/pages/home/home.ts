import {Component} from '@angular/core';

import {
  NavController,
  AlertController
} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
             selector   : 'page-home',
             templateUrl: 'home.html'
           })
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }
  
  scan() {
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      let alert = this.alertCtrl.create({
                                                          title   : 'New Friend!',
                                                          subTitle: result.text,
                                                          buttons : ['OK']
                                                        });
                      alert.present();
                    }
                  })
                  .catch((err) => {
                    alert(err);
                  })
  }
  
  scanAddToCart() {
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      let alert = this.alertCtrl.create({
                                                          title   : 'New Friend!',
                                                          subTitle: result.text,
                                                          buttons : ['OK']
                                                        });
                      alert.present();
                    }
                  })
                  .catch((err) => {
                    alert(err);
                  })
  }
  
}
