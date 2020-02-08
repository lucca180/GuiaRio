import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroGuiaPageRoutingModule } from './cadastro-guia-routing.module';

import { CadastroGuiaPage } from './cadastro-guia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroGuiaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroGuiaPage]
})
export class CadastroGuiaPageModule {}
