import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
//IMPORTAMOS EL SERVICIO API DE PROFESOR AL COMPONENTE LISTAR PROFESOR
import { ApiService } from '../../servicios/apiprofesores/api.service';
//IMPORTAMOS EL MODELO DE LA API ESTUDIANTE AL COMPONENTE LISTAR ESTUDIATE
import {ListaprofesoresInterface} from '../../modelos/listaprofesores.interface';


@Component({
  selector: 'app-dashboard-profesores',
  templateUrl: './dashboard-profesores.component.html',
  styleUrls: ['./dashboard-profesores.component.css']
})
export class DashboardProfesoresComponent implements OnInit {

  //SE CREA UNA VARIABLE DE TIPO DATOS INTERFACE MODELO Y ES ARRAY
  profesores: ListaprofesoresInterface[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    
    //SE CREA UN METODO PARA OBTENER TODOS LOS PROFESORES, DENTRO DEL ngOnInit: AL LLAMAR AL COMPONENTE SE EJECUTE AUTOMATICAMENTE:
    this.api.getAllEstudiantes().subscribe(data =>{
      this.profesores = data;
    });
  }

}
