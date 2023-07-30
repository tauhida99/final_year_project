import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public backendApiUrl = 'http://localhost:9090';
  public token!: string;


  constructor(private httpClient: HttpClient) { }


  public login(user: User): Observable<HttpResponse<User>> {
    return this.httpClient.post<User>(`${this.backendApiUrl}/auth/login`, user, { observe: 'response' });
  }


  public registeredClient(userClient: User): Observable<User> {
    return this.httpClient.post<User>(`${this.backendApiUrl}/client/registerClient`, userClient);
  }


  // save token in localstorage
  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }


  // get token in localstorage
  public getToken(): string {
    return this.token;
  }


  // load token from localstorage
  public loadToken(): void {
    this.token = localStorage.getItem('token')!;
  }



  // addUserToLocalStorage
  public addUserToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }


  // getUserToLocalStorage
  public getUserToLocalStorage(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }


  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token != '') {
      return true;
    } else {
      this.logOut();
      return false;
    }
  }


  public logOut(): any {
    this.token = null!;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


}
