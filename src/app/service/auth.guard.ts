import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn: any = this.authService.isLoggedIn();
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
  
}

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const isLoggedIn: any = await this._authService.isLoggedIn();

    if (isLoggedIn) {
      this._router.navigate([' ']);
      return false;
    } else {
      return true;
    }
  }
}
