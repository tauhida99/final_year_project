import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enumeration/role-enum';
import { Lawyer } from 'src/app/model/lawyer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LawyerService } from 'src/app/services/lawyer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public lawyers!: Lawyer[];
  clients: any;

  constructor(
    private lawyerService: LawyerService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllLawyers();
    
  }

  // ====== LAWYERS
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

  public getLawyerById(lawyerId: number): void {
    this.lawyerService.getLawyerById(lawyerId).subscribe(
      (response: Lawyer) => {
        console.log(response);
        this.router.navigateByUrl("/dashboard/list-users")
        // this.router.navigate(['/dashboard/list-lawyer', lawyerId]);
      },
      (error: HttpErrorResponse) => {
        console.log("Error Occured");
      }
    )
  }




  // role based
  public getUserRole(): string {
    return this.authenticationService.getUserToLocalStorage().role;
  }

  public get isAdmin(): boolean {
    return this.getUserRole() == Role.ADMIN;
  }

  public get isLawyer(): boolean {
    return this.getUserRole() == Role.LAWYER;
  }

  public get isJudge(): boolean {
    return this.getUserRole() == Role.JUDGE;
  }

  public get isClient(): boolean {
    return this.getUserRole() == Role.CLIENT;
  }

  public get isClientOrAdmin(): boolean {
    return this.isClient || this.isAdmin;
  }


  viewLawyerDetails(lawyer: Lawyer) {
    console.log("get lawyer ", lawyer)
    //redirecting to the lawyer details page and passing details as state data
    this.router.navigate(['/dashboard/lawyer-details'], { state: { lawyer: lawyer } })
  }

}
