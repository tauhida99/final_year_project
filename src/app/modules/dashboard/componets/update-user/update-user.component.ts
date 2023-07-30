import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  private userId!: number;
  public updateUser = new User;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUpdatedUserInformation();
  }

  public getUpdatedUserInformation(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.userService.findUserById(this.userId).subscribe(
      (respose: User) => {
        this.updateUser = respose;
      },
      (httpErrorResponse: HttpErrorResponse) => {
        Swal.fire({
          icon:'error',
          title: 'An error ocurred',
          showConfirmButton:false,
          timer:1500
      })      }
    );
  }


  // update
  public onUpdateUser(updateUserForm: NgForm): void {
    this.userService.updateUser(updateUserForm.value, this.userId).subscribe(
      (respose: User) => {
        this.updateUser = respose;
        Swal.fire({
          icon: 'success',
          title: 'Updated Perform Surcessfully',
          showConfirmButton: false,
          timer: 1500

        })
      },
      (httpErrorResponse: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'An error ocurred',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }


}
