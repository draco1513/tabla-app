import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string = '';
  private password: string = ''; // También puedes inicializar la propiedad 'password' aquí

  setCredentials(username: string, password: string): void {
    this.username = username;
    this.password = password;
  }

  getCredentials(): { username: string; password: string } {
    return { username: this.username, password: this.password };
  }

  constructor() { }

  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    // Aquí verificaríamos las credenciales con un servidor o una fuente de datos
    // Por ahora, utilizaremos credenciales fijas para fines de demostración
    if (username === 'watson' && password === '12345678') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
