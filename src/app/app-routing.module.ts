import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioOneComponent } from './components/formulario-one/formulario-one.component';
import { IgualacionesComponent } from './components/igualaciones/igualaciones.component';
import { ServicesTestComponent } from './components/services-test/services-test.component';

export const routes: Routes = [
  {path: '', component: IgualacionesComponent},
  {path: 'services', component: ServicesTestComponent},
  {path: 'formulario-uno', component: FormularioOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
