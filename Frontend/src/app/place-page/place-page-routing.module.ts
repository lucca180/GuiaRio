import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacePagePage } from './place-page.page';

const routes: Routes = [
  {
    path: '',
    component: PlacePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacePagePageRoutingModule {}
