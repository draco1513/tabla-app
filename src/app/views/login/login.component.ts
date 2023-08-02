// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }
  login() {
    // Verificar si las credenciales son válidas antes de llamar al servicio de autenticación
    if (this.username && this.password) {
      const isLoggedIn = this.authService.login(this.username, this.password);
      if (isLoggedIn) {
        // Redireccionar al componente "tabla" si las credenciales son correctas
        this.router.navigateByUrl('/tabla');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      alert('Por favor, ingrese el usuario y la contraseña.');
    }
  }

}
