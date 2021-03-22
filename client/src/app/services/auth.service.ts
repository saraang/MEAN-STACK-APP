import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = "/api/users";



  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(this.registerUrl, user);
  }
  
}
