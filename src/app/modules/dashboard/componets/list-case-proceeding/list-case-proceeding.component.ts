import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseProceeding } from 'src/app/model/case-proceeding';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseProceedingService } from 'src/app/services/case-proceeding.service';

@Component({
  selector: 'app-list-case-proceeding',
  templateUrl: './list-case-proceeding.component.html',
  styleUrls: ['./list-case-proceeding.component.css']
})
export class ListCaseProceedingComponent implements OnInit {
  public caseproceedings!: CaseProceeding[];
  getAllCaseProceeding: any;

  constructor(
    private caseProceedingService: CaseProceedingService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCaseProceedingInformation();
  }

  public getAllCaseProceedingInformation(): void {
    this.caseProceedingService.getAllCaseProceeding().subscribe(
      (response: CaseProceeding[]) => {
        this.caseproceedings = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }

  

}
