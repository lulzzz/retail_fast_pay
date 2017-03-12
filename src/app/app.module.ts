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
import {LoginComponent} from "../pages/login/login";
import {UserCollection} from "../services/ddp/collections/users";

@NgModule({
            declarations   : [
              MyApp,
              LoginComponent,
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
              LoginComponent,
              AboutPage,
              ContactPage,
              HomePage,
              TabsPage
            ],
            providers      : [
              {provide: ErrorHandler, useClass: IonicErrorHandler},
              AppService,
              ClientFastOrders,
              UserCollection
            ]
          })
export class AppModule {
}
