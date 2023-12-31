import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {map, take} from "rxjs/operators";
import {AuthService} from "../services/auth-service";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user
      .pipe(take(1),map(user => {
        const isAuth = !!user;
        if(isAuth){
          return true;
        }

        this.authService.redirectUrl = state.url;

        return this.router.createUrlTree(['/login'])
      }));
  }


}
