import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public backendApiUrl = 'http://localhost:9090';


  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ){}

  public registerClient(userClient: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.backendApiUrl}/client/registerClient`, userClient);
  }
  public addClient(userClient: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.backendApiUrl}/client/addClient`, userClient);
  }

  public updateClient(userClient: User): Observable<User> {
    return this.httpClient.put<User>(`${this.backendApiUrl}/client/updateClient/`, userClient);
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.backendApiUrl}/client/getAllUsers`);
  }

  public getAllClients(): Observable<User> {
    return this.httpClient.get<User>(`${this.backendApiUrl}/client/getAllClients`);
  }

  public getClientById(clientId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.backendApiUrl}/client/findClient/${clientId}`);
  }

  public deleteClientById(clientId: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.backendApiUrl}/client/deleteClient/${clientId}`);
  }
}
