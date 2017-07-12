import { User } from './models/user.model';
import { UserStore } from './store/user/user.store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private store: UserStore,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.getCurrentUser()
            .switchMap((user: User) => {
                if (user.authenticated) {
                    return Observable.of(true);
                }

                this.router.navigate(['/login']);
                return Observable.of(false);
            });
    }
}
