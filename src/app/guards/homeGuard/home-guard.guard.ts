import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate  {

  constructor(private router: Router) {

  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
          console.log('foi');
          return true
 }

}

