import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaseProceeding } from '../model/case-proceeding';
import { Observable } from 'rxjs';
import { Case } from '../model/case';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CaseProceedingService {

  public backendApiUrl = 'http://localhost:9090';


  constructor(private httpClient: HttpClient) { }


  public isProceedingCase(caseProceeding:CaseProceeding, cases:Case, caseId:number): Observable<CaseProceeding> {
    return this.httpClient.post<CaseProceeding>(`${this.backendApiUrl}/caseProceed/isProceedingCase/case/${caseId}`,caseProceeding);
  }

  public getAllCaseProceeding(): Observable<CaseProceeding[]> {
    return this.httpClient.get<CaseProceeding[]>(`${this.backendApiUrl}/caseProceed/getAllCaseProceeding`);
  }

  public getAllCaseProceedByUsername(userId:number): Observable<CaseProceeding[]>{
    return this.httpClient.get<CaseProceeding[]>(`${this.backendApiUrl}/caseProceed/getAllCaseProceeding/client/${userId}`);
  }

  public updateCaseProceedingDetails(caseProceeding:CaseProceeding): Observable<CaseProceeding> {
    return this.httpClient.post<CaseProceeding>(`${this.backendApiUrl}/caseProceed/updateCaseProceedingDetails/`,caseProceeding);
  }

  public deleteCaseProceedInformation(caseProceedingId:number): Observable<CaseProceeding> {
    return this.httpClient.delete<CaseProceeding>(`${this.backendApiUrl}/caseProceed/deleteCaseProceed/${caseProceedingId}`);
  } 

  public getCaseProceedById(caseProceedingId:number): Observable<CaseProceeding> {
    return this.httpClient.get<CaseProceeding>(`${this.backendApiUrl}/caseProceed/getCaseProceedById/${caseProceedingId}`);
  }


}
