import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  data = {
    customerEmail: "roni_cost@example.com",
    refNumber    : Math.random(),
    license      : 'abc123'
  };
  
  constructor() { }
  
}
