
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router} from '@angular/router';

//Importamos el modelo de lista Colegios
import { listacolegiosI } from '../../modelos/listacolegios.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colegios:listacolegiosI[];

  constructor( private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllColegios().subscribe(data =>{
      this.colegios = data;
    });
  }
  //Evento para enviar al Metodo Editar
  editarColegio(id){
    this.router.navigate(['editar', id]);
  }
  //Evento para enviar al metodo nuevo
  nuevoColegio(){
    this.router.navigate(['nuevo']);
  }
}
