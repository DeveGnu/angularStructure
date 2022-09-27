import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {}
  canActivate(): boolean {
    const role = localStorage.getItem('angular-testing-role');

    console.log(role)
    if (role === 'admin') {
      return true;
    }
    alert("No tienes permiso de entrar a este panel");
    return false;
  }
}
