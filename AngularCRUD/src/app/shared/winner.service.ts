import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Winner } from './winner.model';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  selectedWinner: Winner; //Datos que seran editados
  winners: Winner[]; //Todos los datos provenientes de la base de datos
  readonly baseURL = 'http://localhost:3000/winners';

  constructor(private http : HttpClient) { }

  postWinner(win : Winner){
    return this.http.post(this.baseURL, win);
  }

  getWinnerList(){
    return this.http.get(this.baseURL);
  }

  putWinner(win : Winner){
    return this.http.put(this.baseURL + `/${win._id}` ,win);
  }

  deleteWinner(_id : String){
    return this.http.delete(this.baseURL + `/${_id}`);
  }  
}
