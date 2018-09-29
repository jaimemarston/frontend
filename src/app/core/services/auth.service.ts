import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usernameDefault = 'jaime';
  private passwordDefault = '123456';

  constructor() {
  }

  authenticate(credentiales: { username: string, password: string }) {
    if (credentiales.username === this.usernameDefault && credentiales.password === this.passwordDefault) {
      localStorage.setItem('user', 'user!!!');
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }
}
