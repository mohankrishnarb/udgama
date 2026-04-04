import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  _id: string;
  fullname: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Your Node.js backend URL
  private API_URL = 'https://udgamadb.onrender.com/api/users';

  constructor(private http: HttpClient) { }

  // Signup: Register new user
  signup(userData: any) {
    return this.http.post(`${this.API_URL}/signup`, userData);
  }

  // CREATE: Register a new user
  createUser(userData: any): Observable<any> {
    return this.signup(userData);
  }

  // READ: Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/listAll`);
  }

  // UPDATE: Modify an existing user
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/updateUser/${id}`, userData);
  }

  // DELETE: Remove a user
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/deleteUser/${id}`);
  }

  // DELETE: Remove all users
  deleteAllUsers(): Observable<any> {
    return this.http.delete(`${this.API_URL}/deleteAll`);
  }

  // login user
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signin`, credentials);
  }

}
