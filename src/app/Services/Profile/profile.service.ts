import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, tap } from 'rxjs';
import { User } from '../../Models/User/user.model';

@Injectable({ providedIn: 'root' })
export class ProfileServices {
  private apiUrl = 'https://park.renaissance.ph/api/userAccount';

  constructor(private http: HttpClient) {}

  userinformation(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/displayUser/${id}`);
  }
  
  addNewUser(post: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, post);
  }

  sentOTP(id: number): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/sentOTP/${id}`,{});
  }

  displayProfile(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/personalInfo/${id}`)
  }
}
