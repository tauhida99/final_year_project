import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CaseProceeding } from '../model/case-proceeding';
import { Client } from '../model/client';
import { Lawyer } from '../model/lawyer';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public backendApiUrl = 'http://localhost:9090';

    constructor(
      private httpClient: HttpClient,     
      private authenticationService: AuthenticationService) { }

  //client
  
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

  //Lawyer

  

  //Judge
  public createJudge(userJudge: User): Observable<User> {
    return this.httpClient.post<User>(`${this.backendApiUrl}/judge/createJudge`, userJudge);
  }

  public addJudge(userJudge: User): Observable<User> {
    return this.httpClient.post<User>(`${this.backendApiUrl}/judge/addJudge`, userJudge);
  }

  public updateJudgeInformation(userJudge: User): Observable<User> {
    return this.httpClient.put<User>(`${this.backendApiUrl}/judge/updateJudge/`, userJudge);
  }

  public getJudges(): Observable<User> {
    return this.httpClient.get<User>(`${this.backendApiUrl}/judge/allJudges`);
  }

  public getAllJudges(): Observable<User> {
    return this.httpClient.get<User>(`${this.backendApiUrl}/judge/getAllJudges`);
  }

  public getJudgeById(judgeId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.backendApiUrl}/judge/findJudge/${judgeId}`);
  }

  public deleteJudgeById(judgeId: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.backendApiUrl}/judge/deleteJudge/${judgeId}`);
  }





}
