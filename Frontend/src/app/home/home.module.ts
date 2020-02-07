import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaceFeaturedComponent } from '../components/place-featured/place-featured.component';
import { GuideCardComponent } from '../components/guide-card/guide-card.component';

@NgModule({
  imports: [
    FontAwesomeModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, PlaceFeaturedComponent, GuideCardComponent]
})
export class HomePageModule {}
