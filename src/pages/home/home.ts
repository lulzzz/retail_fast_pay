import {Component} from '@angular/core';

import {
  NavController,
  AlertController
} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {MeteorObservable} from "meteor-rxjs";
import {AppService} from "../../app/app.service";

@Component({
             selector   : 'page-home',
             templateUrl: 'home.html'
           })
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, protected appService: AppService) {
    
  }
  
  scan() {
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      MeteorObservable.call("client.add_fast_order", {
                        license        : this.appService.data.license,
                        client_order_id: result.text,
                        additional_data: {
                          customerEmail: this.appService.data.customerEmail,
                          refNumber    : this.appService.data.refNumber
                        }
                      }).subscribe((res: any) => {
                        let alert = this.alertCtrl.create({
                                                            title   : 'Well done!',
                                                            subTitle: res,
                                                            buttons : ['OK']
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
    BarcodeScanner.scan()
                  .then((result) => {
                    if (!result.cancelled) {
                      MeteorObservable.call("client.add_fast_order", {
                        license        : this.appService.data.license,
                        client_order_id: "",
                        product_id     : result.text,
                        additional_data: {
                          customerEmail: this.appService.data.customerEmail,
                          refNumber    : this.appService.data.refNumber,
                        }
                      }).subscribe((res: any) => {
                        let alert = this.alertCtrl.create({
                                                            title   : 'Well done!',
                                                            subTitle: res,
                                                            buttons : ['OK']
                                                          });
                        alert.present();
                      }, err => console.log(err));
                    }
                  })
                  .catch((err) => {
                    alert(err);
                  })
  }
  
  dummyData() {
    MeteorObservable.call("client.add_fast_order", {
      license        : this.appService.data.license,
      client_order_id: "",
      additional_data: {
        customerEmail: this.appService.data.customerEmail,
        refNumber    : this.appService.data.refNumber
      }
    }).subscribe((res: any) => {
      let alert = this.alertCtrl.create({
                                          title   : 'Well done!',
                                          subTitle: res,
                                          buttons : ['OK']
                                        });
      alert.present();
    }, err => console.log(err));
  }
}
