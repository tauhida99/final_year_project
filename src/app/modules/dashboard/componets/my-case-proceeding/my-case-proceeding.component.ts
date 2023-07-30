import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'src/app/model/case';
import { CaseProceeding } from 'src/app/model/case-proceeding';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseProceedingService } from 'src/app/services/case-proceeding.service';

@Component({
  selector: 'app-my-case-proceeding',
  templateUrl: './my-case-proceeding.component.html',
  styleUrls: ['./my-case-proceeding.component.css']
})
export class MyCaseProceedingComponent implements OnInit {
  public caseProceeding!: CaseProceeding[] ;
  public currentUser = new User;
caseproceedings: any;

  constructor(
    private caseProceedingService:CaseProceedingService,
    private authenticationService: AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCaseProceedByUsername();
    this.currentUser = this.authenticationService.getUserToLocalStorage();

  }

  public getAllCaseProceedByUsername(): void {
    const userId = this.authenticationService.getUserToLocalStorage().userId;
    this.caseProceedingService.getAllCaseProceedByUsername(userId).subscribe(
      (response: CaseProceeding[]) => {
        this.caseProceeding = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }

}
