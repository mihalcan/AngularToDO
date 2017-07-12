import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { Auth } from './models/auth.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    authenticate(auth: Auth): Observable<User> {
        return Observable.of({userName: auth.userName, authenticated: true } as User);
    }
}
