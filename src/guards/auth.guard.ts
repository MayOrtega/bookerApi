import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('Guardia de rutas ejecutado');
    if (this.authService.getToken()) {
        console.log('Usuario autenticado, acceso permitido');
        return true;
    } else {
        console.log('Usuario no autenticado, redirigiendo al login');
        this.router.navigate(['/login']);
      return false;
    }
  }
}
