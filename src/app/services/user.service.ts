import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public backendApiUrl = 'http://localhost:9090';

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService) { }


    public updateUser(user: User, userId: number): Observable<User> {
      return this.httpClient.put<User>(`${this.backendApiUrl}/user/update/user/${userId}`, user);
    }

    public addNewUser(user: User): Observable<User> {
      return this.httpClient.post<User>(`${this.backendApiUrl}/user/add/user`, user);
    }
  
    

    public getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(`${this.backendApiUrl}/user/getAllUsers`);
    }


    public findUserById(userId: number): Observable<User> {
      return this.httpClient.get<User>(`${this.backendApiUrl}/user/find/user/${userId}`);
    }


    public deleteUser(userId: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.backendApiUrl}/user/delete/user/${userId}`);
    }

    public sendEmail(email:string): Observable<any> {
      return this.httpClient.post<any>(`${this.backendApiUrl}/user/sender/${email}`,email);
  
    }

}
