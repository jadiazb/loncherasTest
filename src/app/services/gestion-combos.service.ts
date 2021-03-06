import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComboRq } from '../models/combo-request';
import { Observable } from 'rxjs';
import { Combo } from '../models/combo-response';

@Injectable({
  providedIn: 'root'
})
export class GestionCombosService {

  url = '';
  urlDelete = '';

  constructor(private http: HttpClient) {
    console.log('service ready');
    this.url = 'https://wgsoft.tech/AppLoncheras/rest/Combo/0';
    this.urlDelete = 'https://wgsoft.tech/AppLoncheras/rest/Combo/';
  }

  agregar(request: ComboRq): Observable<Combo> {

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );

    return this.http.post<Combo>(this.url,
      request,
      { headers }
    );

  }

  borrar(request: string) {

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );

    return this.http.delete(this.urlDelete + request,
      { headers });

  }

}
