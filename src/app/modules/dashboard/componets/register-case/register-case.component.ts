import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Case } from 'src/app/model/case';
import { Lawyer } from 'src/app/model/lawyer';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CaseServiceService } from 'src/app/services/case-service.service';
import { LawyerService } from 'src/app/services/lawyer.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-case',
  templateUrl: './register-case.component.html',
  styleUrls: ['./register-case.component.css']
})
export class RegisterCaseComponent implements OnInit {
  public lawyer!: Lawyer;
  public lawyers!: Lawyer[];
  public currentUser!: User;
  public lawyerId!: number;
  public defaultSelectedLawyer = "default";

  constructor(
    private caseServiceService: CaseServiceService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private lawyerService: LawyerService,
  ) { }

  ngOnInit(): void {
    this.getAllLawyers();
    this.currentUser = this.authenticationService.getUserToLocalStorage();
  }

  public findLawyerById(userId: number): void {
    this.lawyerService.getLawyerById(userId).subscribe(
      (response: Lawyer) => {
        this.lawyer = response;
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }


  public getAllLawyers(): void {
    this.lawyerService.getAllLawyers().subscribe(
      (response: Lawyer[]) => {
        this.lawyers = response;
      },                                      
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    );
  }

  public registerCase(caseForm: NgForm): void {
    this.caseServiceService.registerCase(caseForm.value, this.currentUser.userId, this.lawyerId).subscribe(
      (response: Case) => {
        Swal.fire({
          icon: 'success',
          title: 'Case registered successfully.',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (httpErrorResponse: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'An error occurred.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }


  public getLawyerId(event: any): void {
    this.lawyerId = event.target.value;
    console.log(this.lawyerId);
  }





}
