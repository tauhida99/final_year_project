import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  public backendApiUrl = 'http://localhost:9090';


  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

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
