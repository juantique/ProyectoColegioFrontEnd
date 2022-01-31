import { Component, OnInit } from '@angular/core';

//importamos la libreria forms formularios
import { FormGroup, FormControl, Validators } from '@angular/forms';
//importamos el servicio
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';

//direccionar la pagina
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variable grupo formulario
  loginForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router: Router) { }

  //Variables de Error de Login
  errorStatus:boolean = false;
  errorMsg:any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  //Se crea funcion para validar si existe el token:
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  //Funcion de Validacion del Login
  onLogin(form:LoginI){
    this.api.loginByUser(form).subscribe(data =>{
      let dataResponse: ResponseI = data;
      if (dataResponse.status == "ok"){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsg = dataResponse.result.error_msg;
      }
    });
  }
}
