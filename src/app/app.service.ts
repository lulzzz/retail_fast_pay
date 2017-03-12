import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  data = {
    customerEmail: "roni_cost@example.com",
    refNumber: parseInt(Math.random() * 1000000 + ""),
    userId: ""
  };
  
  constructor() { }
  
}
