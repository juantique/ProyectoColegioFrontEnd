
//Este servicio controla las conexiones a la API
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { listacolegiosI } from '../../modelos/listacolegios.interface';
import {ColegioI} from '../../modelos/colegio.interface';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //variable de la ApiRest
  url:string = "http://localhost:8181/api/";

  constructor(private http:HttpClient, private activerouter: ActivatedRoute) { }

  //Metodo de Login:
  loginByUser(form: LoginI):Observable<ResponseI>{
    let direccion = this.url + "usuario";
    return this.http.post<ResponseI>(direccion, form);

  }
  //METODO GET COLEGIO:
  getAllColegios():Observable<listacolegiosI[]>{
    let direccion = this.url + "colegios";
    return this.http.get<listacolegiosI[]>(direccion);
  }

  //METODO GET X ID COLEGIO:
  getUnicoColegio(id):Observable<ColegioI>{
    let direccion = this.url + "colegios/" + id;
    return this.http.get<ColegioI>(direccion);
  }

  //METODO PUT ACTUALIZAR COLEGIO X ID:
  //putColegio(formularioColegio):Observable<ResponseI>{
  putColegio(formularioColegio):Observable<ColegioI>{
    console.log(formularioColegio);
    let id = formularioColegio.idformcolegio;
    console.log(formularioColegio.idformcolegio);
    console.log(formularioColegio);
    let direccion = this.url + "colegios/" + id;
    console.log(direccion);
    return this.http.put<ColegioI>(direccion, formularioColegio)
  }
}
