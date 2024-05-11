import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reservas', component: ReservasComponent, canActivate: [AuthGuard] }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }