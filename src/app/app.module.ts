import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgualacionesComponent } from './components/igualaciones/igualaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesTestComponent } from './components/services-test/services-test.component';
import { FormularioOneComponent } from './components/formulario-one/formulario-one.component'


@NgModule({
  declarations: [
    AppComponent,
    IgualacionesComponent,
    ServicesTestComponent,
    FormularioOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
