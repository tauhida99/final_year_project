import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enumeration/role-enum';
import { Lawyer } from 'src/app/model/lawyer';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LawyerService } from 'src/app/services/lawyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  public currentUser!: User;
  currentUserrole!: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.getUserToLocalStorage();
    this.currentUserrole = this.currentUser.role
  }


  public logOut(): void {
    Swal.fire({
      icon: 'success',
      title: 'You have been logout',
      showConfirmButton: false,
      timer: 1500
    })
    this.authenticationService.logOut();
    this.router.navigateByUrl("/login");

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

  public get isAdminOrLawyer(): boolean {
    return this.isAdmin || this.isLawyer;
  }
  public get isClientOrLawyer(): boolean {
    return this.isClient || this.isLawyer;
  }
  // public get isClientOrAdmin(): boolean {
  //   return this.isClient || this.isAdmin;
  // }


}
