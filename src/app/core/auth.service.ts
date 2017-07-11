import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    private authenticated = false;
    private userName: string;

    login(userName: string, pwd: string) {
        this.userName = userName;
        this.authenticated = true;
    }

    isAuthenticated(): boolean {
        console.log('authenticated: ' + this.authenticated);
        return this.authenticated;
    }

    getUserName(): string {
        console.log('userName: ' + this.userName);
        return this.userName;
    }
}
