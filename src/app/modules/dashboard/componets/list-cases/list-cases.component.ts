import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'src/app/model/case';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseServiceService } from 'src/app/services/case-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.css']
})
export class ListCasesComponent implements OnInit {
  public cases!: Case[];


  constructor(
    private caseServiceService: CaseServiceService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.getAllCases();
  }

  public getAllCases() :void{
    this.caseServiceService.getAllCases().subscribe(
      (response: Case[]) => {
        this.cases = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }


  public findCaseById(caseId: number): void {
    this.caseServiceService.getCaseById(caseId).subscribe(
      (response: Case) => {
        this.router.navigate(['/dashboard/update-case', caseId]);
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
      }
    )
  }

  
  public findCaseByLawyer(lawyerId:number): void {
    this.caseServiceService.getAllCasesByLawyerId(lawyerId).subscribe(
            (response:any)=>{
              this.cases = response;
                  console.log(response);
            },
            (error: HttpErrorResponse) => {
              console.log("Error occured");
            }    )
        }  

}

