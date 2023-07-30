import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'src/app/model/case';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseServiceService } from 'src/app/services/case-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-client',
  templateUrl: './my-client.component.html',
  styleUrls: ['./my-client.component.css']
})
export class MyClientComponent implements OnInit {
users: any;
public case!: Case[];
public currentUser = new User;
cases: any;


  constructor(
    private caseServiceService: CaseServiceService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const lawyerId = this.authenticationService.getUserToLocalStorage().userId;
    this.findCaseByLawyer(lawyerId);
  }

   
  public findCaseByLawyer(lawyerId:number): void {
    this.caseServiceService.getAllCasesByLawyerId(lawyerId).subscribe(
            (response:any)=>{
              this.case = response;
                  console.log(response);
            },
            (error: HttpErrorResponse) => {
              console.log("Error occured");
            }    )
        }  


  //Email configuration 
  public sendEmail(email:string): void {
    this.userService.sendEmail(email).subscribe(
      (response:User) =>{
        console.log(response);
      },
      (error:HttpErrorResponse) =>{
        console.log("Error occured");
        console.log(error);
      }
    )
  }


}
