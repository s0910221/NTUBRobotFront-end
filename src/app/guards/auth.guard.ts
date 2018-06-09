import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogin = false;

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // if (!this.isLogin) {
    //   sessionStorage.setItem('redirect_url', next.url[0].path);
    //   this.router.navigate(['/login']);
    // }
    // return this.isLogin;
    //
  }
}
