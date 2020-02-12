import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlacePageRoutingModule } from './place-routing.module';

import { PlacePage } from './place.page';
import { ReviewCardComponent } from '../components/review-card/review-card.component';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlacePage, ReviewCardComponent]
})
export class PlacePageModule {}
