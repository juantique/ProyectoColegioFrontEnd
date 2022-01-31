import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

//IMPORTA LA INTERFACE DE PROFESORES DE LA CARPETA MODELO
import { ListaprofesoresInterface } from '../../modelos/listaprofesores.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   //VARIABLE NOMBRE url DE TIPO STRING PARA QUE ALMACENA LA URL DE LA API:
   url: string = "http://localhost:8181/api/";

  constructor( private http:HttpClient ) { }

  //SE CREA EL METODO DE OBTENER TODOS LOS ESTUDIANTES
  getAllEstudiantes():Observable<ListaprofesoresInterface[]>{
    let direccion = this.url + "profesores";
    return this.http.get<ListaprofesoresInterface[]>(direccion);
  }
}
