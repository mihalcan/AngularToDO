import { UserAction } from './user.action';
import { State, initialState } from './../state';
import { ActionReducer, Action } from '@ngrx/store';

export function userReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case UserAction.AUTHENTICATED:
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
}
