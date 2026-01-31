import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private tokenKey = 'auth_token';
  private userRoleKey = 'user_role';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    return localStorage.getItem(this.userRoleKey) === 'admin';
  }

  login(token: string, role: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userRoleKey, role);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userRoleKey);
  }
}
