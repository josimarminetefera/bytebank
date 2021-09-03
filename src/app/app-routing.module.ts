import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

//CADA OBJETO VAI POSSUIR UMA ROTA
export const routes: Routes = [
  //pathMatch QUALQUER PAGINA SERÁ REDIRECIONADO PARA ESTA ROTA.
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  //forRoot IDENTIFICA QUE PARA ESSE MODEL PRINCIPAL AS ROTAS VÃO SER ESSAS
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
