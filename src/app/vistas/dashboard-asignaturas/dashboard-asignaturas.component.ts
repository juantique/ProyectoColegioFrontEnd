import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

//IMPORTAMOS EL SERVICIO API DE LA ASIGNATURA AL COMPONENTE LISTAR ESTUDIANTE
import { ApiService } from '../../servicios/apiasignaturas/api.service';
//IMPORTAMOS EL MODELO DE LA API ASIGNATURA AL COMPONENTE LISTAR ASIGNATURA
import {ListaasignaturaInterface} from '../../modelos/listaasignaturas.interface';

@Component({
  selector: 'app-dashboard-asignaturas',
  templateUrl: './dashboard-asignaturas.component.html',
  styleUrls: ['./dashboard-asignaturas.component.css']
})
export class DashboardAsignaturasComponent implements OnInit {

  //SE CREA UNA VARIABLE DE TIPO DATOS INTERFACE MODELO Y ES ARRAY
  asignatura: ListaasignaturaInterface[];

  array: [];
  
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    //SE CREA UN METODO PARA OBTENER TODOS LAS ASIGNATURAS, DENTRO DEL ngOnInit: AL LLAMAR AL COMPONENTE SE EJECUTE AUTOMATICAMENTE:
    this.api.getAllAsignatura().subscribe(data =>{
      //console.log(data);
      this.asignatura = data;
    });
  }

}
