import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const role = localStorage.getItem('angular-testing-role'); // admin, user, null

    if (role === 'user') {
      alert('Bienvenido a tu panel');
      return true;
    }

    alert("No tienes perfil de usuario");
    return false;
  }

}
