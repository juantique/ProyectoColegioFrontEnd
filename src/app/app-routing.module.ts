//LIBRERIAS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TODAS LAS RUTAS DEL PROYECTO

//RUTAS DE COLEGIO:
import { EditarComponent } from './vistas/editar/editar.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';

//RUTA DE LOGIN
import { LoginComponent } from './vistas/login/login.component';

//RUTAS DE ESTUDIANTES
import { DashboardEstudiantesComponent } from './vistas/dashboard-estudiantes/dashboard-estudiantes.component';
import { EditarEstudiantesComponent } from './vistas/editar-estudiantes/editar-estudiantes.component';
import { NuevoEstudiantesComponent } from './vistas/nuevo-estudiantes/nuevo-estudiantes.component';

//RUTAS DE PROFESORES
import { DashboardProfesoresComponent } from './vistas/dashboard-profesores/dashboard-profesores.component';
import { EditarProfesoresComponent } from './vistas/editar-profesores/editar-profesores.component';
import { NuevoProfesoresComponent } from './vistas/nuevo-profesores/nuevo-profesores.component';

//RUTAS DE ASIGNATURAS
import { DashboardAsignaturasComponent } from './vistas/dashboard-asignaturas/dashboard-asignaturas.component';
import { EditarAsignaturasComponent } from './vistas/editar-asignaturas/editar-asignaturas.component';
import { NuevoAsignaturasComponent } from './vistas/nuevo-asignaturas/nuevo-asignaturas.component';

//RUTAS DE INCRIPCIONES
import { DashboardInscripcionesComponent } from './vistas/dashboard-inscripciones/dashboard-inscripciones.component';
import { EditarInscripcionesComponent } from './vistas/editar-inscripciones/editar-inscripciones.component';
import { NuevoInscripcionesComponent } from './vistas/nuevo-inscripciones/nuevo-inscripciones.component';

//HOME
import { HomeComponent } from './vistas/home/home.component';

import { AppComponent } from '../app/app.component';

const routes: Routes = [
  //SE CREA LA RUTA POR DEFECTO LOGIN
  //{path:'', redirectTo:'login', pathMatch:'full'},
  //LA RUTA LOGIN
  {path:'login', component: LoginComponent},
  //RUTA COLEGIOS
  {path:'dashboard', component: DashboardComponent},
  {path:'nuevo', component: NuevoComponent},
  {path:'editar/:id', component: EditarComponent},
  //RUTA ESTUDIANTES
  {path:'estudiantes', component: DashboardEstudiantesComponent},
  {path:'estnuevo', component: NuevoEstudiantesComponent},
  {path:'editestudiante', component: EditarEstudiantesComponent},
  //RUTA PROFESORES
  {path:'profesores', component: DashboardProfesoresComponent},
  {path:'profnuevo', component: NuevoProfesoresComponent},
  {path:'editprofesor', component: EditarProfesoresComponent},
  //RUTA ASIGNATURAS
  {path:'asignaturas', component: DashboardAsignaturasComponent},
  {path:'asignanuevo', component: NuevoAsignaturasComponent},
  {path:'editasignatura', component: EditarAsignaturasComponent},
  //RUTA INSCRIPCIONES
  {path:'inscripciones', component: DashboardInscripcionesComponent},
  {path:'inscripnuevo', component: NuevoInscripcionesComponent},
  {path:'editinscripciones', component: HomeComponent},

  //HOME
  {path:'home', component: EditarInscripcionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Exportamos todos los componentes al routing
export const routingComponents = [
  LoginComponent, 
  DashboardComponent, 
  NuevoComponent, 
  EditarComponent, 
  DashboardEstudiantesComponent,
  NuevoEstudiantesComponent,
  EditarEstudiantesComponent,
  DashboardProfesoresComponent,
  NuevoProfesoresComponent,
  EditarProfesoresComponent,
  DashboardAsignaturasComponent,
  NuevoAsignaturasComponent,
  EditarAsignaturasComponent,
  DashboardInscripcionesComponent,
  NuevoInscripcionesComponent,
  EditarInscripcionesComponent,
  HomeComponent
]
