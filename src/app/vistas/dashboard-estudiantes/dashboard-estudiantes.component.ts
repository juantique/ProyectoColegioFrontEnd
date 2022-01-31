import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

//IMPORTAMOS EL SERVICIO API DE ESTUDIANTE AL COMPONENTE LISTAR ESTUDIANTE
import { ApiService } from '../../servicios/apiestudiantes/api.service';
//IMPORTAMOS EL MODELO DE LA API ESTUDIANTE AL COMPONENTE LISTAR ESTUDIATE
import {ListacolegiosInterface} from '../../modelos/listaestudiantes.interface';

@Component({
  selector: 'app-dashboard-estudiantes',
  templateUrl: './dashboard-estudiantes.component.html',
  styleUrls: ['./dashboard-estudiantes.component.css']
})
export class DashboardEstudiantesComponent implements OnInit {

  //SE CREA UNA VARIABLE DE TIPO DATOS INTERFACE MODELO Y ES ARRAY
  estudiantes: ListacolegiosInterface[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    
    //SE CREA UN METODO PARA OBTENER TODOS LOS ESTUDIANTES, DENTRO DEL ngOnInit: AL LLAMAR AL COMPONENTE SE EJECUTE AUTOMATICAMENTE:
    this.api.getAllEstudiantes().subscribe(data =>{
      this.estudiantes = data;
    });
  }

}
