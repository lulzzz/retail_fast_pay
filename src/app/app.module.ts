import {
  NgModule,
  ErrorHandler
} from '@angular/core';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ClientFastOrders} from "../services/ddp/collections/ClientFastOrders";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
            declarations   : [
              MyApp,
              AboutPage,
              ContactPage,
              HomePage,
              TabsPage
            ],
            imports        : [
              FormsModule,
              HttpModule,
              IonicModule.forRoot(MyApp)
            ],
            bootstrap      : [IonicApp],
            entryComponents: [
              MyApp,
              AboutPage,
              ContactPage,
              HomePage,
              TabsPage
            ],
            providers      : [
              {provide: ErrorHandler, useClass: IonicErrorHandler},
              AppService,
              ClientFastOrders
            ]
          })
export class AppModule {
}
