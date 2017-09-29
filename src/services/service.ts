import { Injectable } from '@angular/core';
import {
  Headers,
  Http
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Config } from '../components/app.config';

@Injectable()
export abstract class Service {
  baseUrl = this.config.apiBaseUrl;
  headers = new Headers({'Content-Type': 'application/json'});
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    protected http: Http, // is needed by every service
    private config: Config  // just passes some data
  ) {}
}
