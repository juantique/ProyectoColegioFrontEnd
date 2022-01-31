import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms'; 

import { ColegioI } from '../../modelos/colegio.interface';
import {ApiService} from '../../servicios/api/api.service';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router: Router, private api:ApiService) { }

  datosColegio: ColegioI;
  //En esta variable se crea la estructura
  editarColegio = new FormGroup({
    idformcolegio : new FormControl (''),
    nombreidformcolegio : new FormControl('')
  });  

  ngOnInit(): void {
    let colegioid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getUnicoColegio(colegioid).subscribe(data => {
         this.datosColegio = data;
         this.editarColegio.setValue({
          'idformcolegio' : this.datosColegio.id,
          'nombreidformcolegio' : this.datosColegio.nombre,
         })
         //console.log(this.editarColegio.value);   
      
    })
  }

  //Metodo onClic Actualizar
  //putFormColegio(form: ColegioI): void{
    //this.api.putColegio = Object.assign({}, form);
  //}
  
  putFormColegio(formularioColegio: ColegioI): void{
    this.api.putColegio(formularioColegio).subscribe(data =>{
      console.log(formularioColegio);
      console.log(data);
    })
  
  //putFormColegio(formularioColegio: ColegioI): void{
    //this.api.putColegio = Object.assign({}, formularioColegio);
  //}
  
    //console.log(form);
  }

}


//this.datosColegio = data [0];
//console.log(this.datosColegio);
//console.log(data)