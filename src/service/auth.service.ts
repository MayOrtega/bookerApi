import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'https://restful-booker.herokuapp.com';
private token: string | null = null;


  constructor(private http: HttpClient) { }

  autenticar(username:string, password:string): Observable<any>{
    const authData = { username, password};
    return this.http.post(`${this.apiUrl}/auth`, authData).pipe(
      tap((response:any) => {
        if(response.token) {
          this.setToken(response.token);
        } else {
          throw new Error('No se recibió un token de autenticación válido');
        }

      })
    );
  }
  setToken(token:string){
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }
}
