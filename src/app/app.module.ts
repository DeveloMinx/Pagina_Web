import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { environment } from 'src/environments/environment';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';


import{AngularFireAuthModule}from '@angular/fire/compat/auth';
import{AngularFirestoreModule}from '@angular/fire/compat/firestore';

import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    CreateComponent,
    ShowComponent,
    EditComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
