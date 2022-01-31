import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

//IMPORTA LA INTERFACE DE LA ASIGNATURA DE LA CARPETA MODELO
import { ListaasignaturaInterface } from '../../modelos/listaasignaturas.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //VARIABLE NOMBRE url DE TIPO STRING PARA QUE ALMACENA LA URL DE LA API:
  url: string = "http://localhost:8181/api/";

  constructor(private http:HttpClient) { }

  //SE CREA EL METODO DE OBTENER TODOS LOS ESTUDIANTES
  getAllAsignatura():Observable<ListaasignaturaInterface[]>{
    let direccion = this.url + "asignaturas";
    //console.log(direccion);
    return this.http.get<ListaasignaturaInterface[]>(direccion);
  }
}
