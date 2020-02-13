import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PlaceCardComponent } from './components/place-card/place-card.component';

@NgModule({
  declarations: [PlaceCardComponent],
  imports: [FormsModule, CommonModule, RouterModule, IonicModule],
  exports: [PlaceCardComponent]
})

export class ComponentsModule{}
