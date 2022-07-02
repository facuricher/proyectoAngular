import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //incluir
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';//incluir
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ResgistroComponent } from './Pages/resgistro/resgistro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component'//incluir
import { ListadoModule } from './listado/listado.module';//incluir 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResgistroComponent,
    LoginComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ListadoModule,//incluir
    AppRoutingModule,//incluir
    ReactiveFormsModule, //incluir
    FormsModule,//incluir
    HttpClientModule //incluir
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
