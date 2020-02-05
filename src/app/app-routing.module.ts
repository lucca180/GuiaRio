import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuardGuard } from './guards/homeGuard/home-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro', canActivate: [HomeGuardGuard], 
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pre-cadastro',
    loadChildren: () => import('./pre-cadastro/pre-cadastro.module').then( m => m.PreCadastroPageModule)
  },
  {
    path: 'cadastro-guia',
    loadChildren: () => import('./cadastro-guia/cadastro-guia.module').then( m => m.CadastroGuiaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
