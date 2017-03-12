import {Component} from '@angular/core';

import {
  NavController,
  AlertController
} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {AppService} from "../../app/app.service";
import {Http} from "@angular/http";
import {AboutPage} from "../about/about";

@Component({
             selector: 'page-home',
             templateUrl: 'home.html'
           })
export class HomePage {
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              protected appService: AppService,
              protected http: Http) {
    
  }
  
  private checkData() {
    if (!this.appService.data.userId) {
      let alert = this.alertCtrl.create({
                                          title: 'Required Cashier Account',
                                          message: 'Do you want to select cashier account?',
                                          buttons: [
                                            {
                                              text: 'Cancel',
                                              role: 'cancel',
                                              handler: () => {
                                                console.log('Cancel clicked');
                                              }
                                            },
                                            {
                                              text: 'Ok',
                                              handler: () => {
                                                this.navCtrl.push(AboutPage)
                                              }
                                            }
                                          ]
                                        });
      alert.present();
    }
  }
  
  scan() {
    this.checkData();
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      this.http.post("http://xcloud.smartosc.com:2005//methods/client.add_fast_order", {
                        user_id: this.appService.data.userId,
                        client_order_id: result.text,
                        additional_data: {
                          customerEmail: this.appService.data.customerEmail,
                          refNumber: this.appService.data.refNumber
                        }
                      }).subscribe((res: any) => {
                        let alert = this.alertCtrl.create({
                                                            title: 'Well done!',
                                                            subTitle: res,
                                                            buttons: ['OK']
                                                          });
                        alert.present();
                      }, err => console.log(err));
                    }
                  })
                  .catch((err) => {
                    alert(err);
                  })
  }
  
  scanAddToCart() {
    this.checkData();
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      this.http.post("http://xcloud.smartosc.com:2005//methods/client.add_fast_order", {
                        user_id: this.appService.data.userId,
                        client_order_id: "",
                        product_id: result.text,
                        additional_data: {
                          customerEmail: this.appService.data.customerEmail,
                          refNumber: this.appService.data.refNumber,
                        }
                      }).subscribe((res: any) => {
                        let alert = this.alertCtrl.create({
                                                            title: 'Well done!',
                                                            subTitle: res,
                                                            buttons: ['OK']
                                                          });
                        alert.present();
                      }, err => console.log(err));
                    }
                  })
                  .catch((err) => {
                    alert(err);
                  })
  }
  
  dummyDataUseHttp() {
    this.checkData();
    this.http.post("http://xcloud.smartosc.com:2005//methods/client.add_fast_order", {
      user_id: this.appService.data.userId,
      client_order_id: "",
      additional_data: {
        customerEmail: this.appService.data.customerEmail,
        refNumber: this.appService.data.refNumber
      }
    }).subscribe((res: any) => {
      let alert = this.alertCtrl.create({
                                          title: 'Well done!',
                                          subTitle: res,
                                          buttons: ['OK']
                                        });
      alert.present();
    }, err => {
      let alert = this.alertCtrl.create({
                                          title: 'Error',
                                          subTitle: err,
                                          buttons: ['OK']
                                        });
      alert.present();
    });
  }
}
