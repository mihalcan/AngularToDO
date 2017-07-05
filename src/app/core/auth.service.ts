import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    private authenticated: boolean;
    private userName: string;

    login(userName: string, pwd: string) {
        this.userName = userName;
        this.authenticated = true;
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    getUserName(): string {
        return this.userName;
    }
}