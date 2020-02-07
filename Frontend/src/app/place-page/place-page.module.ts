import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlacePagePageRoutingModule } from './place-page-routing.module';

import { PlacePagePage } from './place-page.page';
import { ReviewCardComponent } from '../components/review-card/review-card.component';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePagePageRoutingModule
  ],
  declarations: [PlacePagePage, ReviewCardComponent]
})
export class PlacePagePageModule {}
