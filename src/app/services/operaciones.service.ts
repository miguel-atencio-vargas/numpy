import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class OperacionesService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
   }
   sumar(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'sumar', params, {headers});
   }
}
