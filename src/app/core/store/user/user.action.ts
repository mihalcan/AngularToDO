import { User } from './../../models/user.model';
import { Auth } from './../../models/auth.model';
import { Action } from '@ngrx/store';

export const UserAction = {
    TRIGGER_AUTHENTICATION: '__ Trigger auth',
    AUTHENTICATED: '__ Authenticated'
}

export class AuthenticateAction implements Action {
    readonly type = UserAction.AUTHENTICATED;
    constructor(public payload: User) {}
}
