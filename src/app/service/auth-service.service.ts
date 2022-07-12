import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  users = [{ id: 1, name: 'demo', email: 'demo@gmail.com', password: 'demo' }];
  loggedInUser = { id: -1, name: '', email: '', password: '' };

  constructor(private router: Router) {}

  isAuthenticated() {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  storeToken(token: number) {
    sessionStorage.setItem('token', token.toString());
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }

  canAccess() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    this.users.push({
      id: this.users.length + 1,
      name: name,
      email: email,
      password: password,
    });
    return this.users.length;
  }

  login(email: string, password: string) {
    let userId = null;
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        this.loggedInUser = user;
        userId = user.id;
      }
    }
    return userId;
  }

  getUserName() {
    return this.loggedInUser.name;
  }
}