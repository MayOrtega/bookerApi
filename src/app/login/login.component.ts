import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.autenticar(this.username, this.password)
    .subscribe(() => {
      // Redirección
      console.log('Autenticación exitosa');
    },
    error => {
      console.error('Error al autenticar:', error);
      }
    );
  }
 }

