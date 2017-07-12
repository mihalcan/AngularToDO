import { Action } from '@ngrx/store';
import { UserAction, AuthenticateAction } from './user.action';
import { AuthService } from './../../auth.service';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserEffects {
    @Effect()
    auth$ = this.actions$
                .ofType(UserAction.TRIGGER_AUTHENTICATION)
                .switchMap((action) => this.authService.authenticate(action.payload))
                .map((data) => new AuthenticateAction(data));

    constructor(private actions$: Actions, private authService: AuthService) {}
}
