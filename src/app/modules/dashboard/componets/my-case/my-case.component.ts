import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'src/app/model/case';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseServiceService } from 'src/app/services/case-service.service';

@Component({
  selector: 'app-my-case',
  templateUrl: './my-case.component.html',
  styleUrls: ['./my-case.component.css']
})
export class MyCaseComponent implements OnInit {
  public cases!:Case[];
  public currentUser = new User;


  constructor(
    private caseServiceService:CaseServiceService,
    private authenticationService: AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCasesByUsername();
    this.currentUser = this.authenticationService.getUserToLocalStorage();
  }


  public getAllCasesByUsername(): void {
    const username = this.authenticationService.getUserToLocalStorage().username;
    this.caseServiceService.getAllCasesByUsername(username).subscribe(
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
}
