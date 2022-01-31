import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

//IMPORTA LA INTERFACE DE ESTUDIANTES DE LA CARPETA MODELO
import { ListacolegiosInterface } from '../../modelos/listaestudiantes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //VARIABLE NOMBRE url DE TIPO STRING PARA QUE ALMACENA LA URL DE LA API:
  url: string = "http://localhost:8181/api/";

  constructor( private http:HttpClient) { }

  //SE CREA EL METODO DE OBTENER TODOS LOS ESTUDIANTES
  getAllEstudiantes():Observable<ListacolegiosInterface[]>{
    let direccion = this.url + "estudiantes";
    return this.http.get<ListacolegiosInterface[]>(direccion);
  }
}
