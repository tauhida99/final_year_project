import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user!: User[];

  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
  }

  //register
  public registerClient(registrationForm: NgForm) :void{
    this.userServiceService.registerClient(registrationForm.value).subscribe(
      (response: Client) => {
        console.log(response);
        Swal.fire({
          icon:'success',
          title:'Client registered successfully ',
          showConfirmButton:false,
          timer:1500
      })
      },
      (error:HttpErrorResponse)=>{
        Swal.fire({
          icon:'warning',
          title:'Sorry registration failed',
          showConfirmButton:false,
          timer:1500
      })
      }
    );
  }

}
