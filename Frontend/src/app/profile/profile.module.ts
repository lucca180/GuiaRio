import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import {ComponentsModule} from '../components.module';

@NgModule({
  imports: [
    ComponentsModule,
    FontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
