import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaceFeaturedComponent } from '../components/place-featured/place-featured.component';
import { GuideCardComponent } from '../components/guide-card/guide-card.component';

@NgModule({
  imports: [
    FontAwesomeModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, PlaceFeaturedComponent, GuideCardComponent]
})
export class Tab1PageModule {}
