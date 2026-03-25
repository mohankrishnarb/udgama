import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Your Node.js backend URL
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  // CREATE: Register a new user
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  // READ: Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // UPDATE: Modify an existing user
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }

  // DELETE: Remove a user
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // login user
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

}
