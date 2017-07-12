import { UserAction } from './user.action';
import { Auth } from './../../models/auth.model';
import { User } from './../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { State } from './../state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class UserStore {
    constructor(private store: Store<State>) {}

    authenticate(auth: Auth): Observable<User> {
        this.store.dispatch({type: UserAction.TRIGGER_AUTHENTICATION, payload: auth});
        return this.getCurrentUser();
    }

    getCurrentUser(): Observable<User> {
        return this.store.select('user')
                .map((state: State) => state.user);
    }
}
