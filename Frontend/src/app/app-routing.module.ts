import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pre-login',
    loadChildren: () => import('./pre-login/pre-login.module').then( m => m.PreLoginPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place-page/place-page.module').then( m => m.PlacePagePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
