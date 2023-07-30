import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lawyer } from '../model/lawyer';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LawyerService {
  public backendApiUrl = 'http://localhost:9090';


  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService)

     { }
  

  public createLawyer(userLawyer: Lawyer): Observable<Lawyer> {
    return this.httpClient.post<Lawyer>(`${this.backendApiUrl}/lawyer/createLawyer`, userLawyer);
  }

  public addLawyer(userLawyer: Lawyer): Observable<Lawyer> {
    return this.httpClient.post<Lawyer>(`${this.backendApiUrl}/lawyer/addLawyer`, userLawyer);
  }

  public updateLawyerInformation(userLawyer: Lawyer): Observable<Lawyer> {
    return this.httpClient.put<Lawyer>(`${this.backendApiUrl}/lawyer/updateLawyer/`, userLawyer);
  }

  public getLawyers(): Observable<Lawyer> {
    return this.httpClient.get<Lawyer>(`${this.backendApiUrl}/lawyer/allLawyers`);
  }

  public getAllLawyers(): Observable<Lawyer[]> {
    return this.httpClient.get<Lawyer[]>(`${this.backendApiUrl}/lawyer/getAllLawyers`);
  }

  public getLawyerById(lawyerId: number): Observable<Lawyer> {
    return this.httpClient.get<Lawyer>(`${this.backendApiUrl}/lawyer/findLawyer/${lawyerId}`);
  }

  public deleteLawyerById(lawyerId: number): Observable<Lawyer> {
    return this.httpClient.delete<Lawyer>(`${this.backendApiUrl}/lawyer/deleteLawyer/${lawyerId}`);
  }

}
