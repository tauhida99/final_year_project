import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/enumeration/role-enum';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users!: User[];
  public updateUser!: User;


  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }


  
  public addNewUser(addUserForm: NgForm): void{
    this.userService.addNewUser(addUserForm.value).subscribe(
      (success: User) =>{
        document.getElementById('btnAddUserlose')?.click();
        this.getAllUsers();
        console.log("suceess");
        Swal.fire({
          icon: 'success',
          title: 'User added successfully',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error: HttpErrorResponse) =>{
        Swal.fire({
          icon: 'error',
          title: 'An error occured',
          showConfirmButton: false,
          timer: 1500
        });      }
    )
  }


  public findUserById(userId: number): void {
    this.userService.findUserById(userId).subscribe(
      (response: User) => {
        this.router.navigate(['/dashboard/update-user', userId]);
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log("Error occured");
        console.log(error);
      }
    )
  }

  // //Email configuration 
  // public sendEmail(email:string): void {
  //   this.userService.sendEmail(email).subscribe(
  //     (response:User) =>{
  //       console.log(response);
  //     },
  //     (error:HttpErrorResponse) =>{
  //       console.log("Error occured");
  //       console.log(error);
  //     }
  //   )
  // }


  

  public deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        this.getAllUsers();
        Swal.fire({
          icon: 'success',
          title: 'User deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'An error occured',
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }

  public saveAddNewUser(): void {
    document.getElementById('btnSaveAddUser')?.click();
  }

 

}


