import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'https://restful-booker.herokuapp.com';
private token: string | null = null;


  constructor(private http: HttpClient) { }

}
