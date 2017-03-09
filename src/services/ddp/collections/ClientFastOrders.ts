import {Injectable} from '@angular/core';
import {AbstractCollection} from "../../../code/meteor/AbstractCollection";

@Injectable()
export class ClientFastOrders extends AbstractCollection {
  $collection: string = "client_fast_orders";
}
