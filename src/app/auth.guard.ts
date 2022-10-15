import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authServices: AuthService,
    private router: Router
  ) { }

  canActivate():boolean {
    if (this.authServices.isLoggedIn) {
      return true
    }

    console.log('Le guard a bien été appelé !');
    this.router.navigate(['/login']);
    return false;
  }

}
