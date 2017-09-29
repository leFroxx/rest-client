import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public server = 'http://localhost:8080/';
    public apiBaseDir = 'api';
    public apiBaseUrl = this.server + this.apiBaseDir;
}
