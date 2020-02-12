import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGuiaPage } from './cadastro-guia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGuiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroGuiaPageRoutingModule {}
