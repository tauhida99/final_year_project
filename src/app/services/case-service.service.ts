import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../model/case';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CaseServiceService {


  public backendApiUrl = 'http://localhost:9090';


  constructor(private httpClient: HttpClient) { }


  public registerCase(cases: Case, clientId: number, lawyerId: number): Observable<Case> {
    return this.httpClient.post<Case>(`${this.backendApiUrl}/cases/registerCase/client/${clientId}/lawyer/${lawyerId}`, cases);
  }

  public getAllCases(): Observable<Case[]> {
    return this.httpClient.get<Case[]>(`${this.backendApiUrl}/cases/getAllCases`);
  }
// method to get 1 or more case based n case ambazo ame register
  public getAllCasesByUsername(username:string) : Observable<Case[]> {
    return this.httpClient.get<Case[]>(`${this.backendApiUrl}/cases/getAllCases/client/${username}`);
  }
// method to get cases based on choosen lawyer
  public getAllCasesByLawyerId(lawyerId:number) : Observable<Case[]> {
    return this.httpClient.get<Case[]>(`${this.backendApiUrl}/cases/getAllCasesByLawyerId/lawyer/${lawyerId}`);
  }

  public updateCase(cases: Case, caseId: number, clientId: number, lawyerId: number): Observable<Case> {
    return this.httpClient.put<Case>(`${this.backendApiUrl}/case/updateCase/case/${caseId}/client/${clientId}/lawyer/${lawyerId}`, cases);
  }

  public deleteCaseInformation(caseId: number): Observable<Case> {
    return this.httpClient.delete<Case>(`${this.backendApiUrl}/case/deleteCaseInformation/${caseId}`);
  }

  public  getCaseById(caseId: number): Observable<Case> {
    return this.httpClient.get<Case>(`${this.backendApiUrl}/cases/getCaseById/${caseId}`);
  }

 
  public getAllCasesWithAssociatedClient(clientId: number): Observable<Case> {
    return this.httpClient.get<Case>(`${this.backendApiUrl}/case/getAllCasesWithClient/${clientId}`);
  }
}
