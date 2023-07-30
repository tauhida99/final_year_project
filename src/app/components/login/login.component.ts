import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl("/dashboard/home")
    } else {
      this.router.navigateByUrl("/login")
    }
  }

  public login(loginUser: User): void {
    this.authenticationService.login(loginUser).subscribe(
      (response: HttpResponse<User>) => {
        const token = response.headers.get("jwt-token");
        this.authenticationService.saveToken(token!);
        this.authenticationService.addUserToLocalStorage(response.body!);
        this.router.navigateByUrl("/dashboard/home");
        Swal.fire({
          icon: 'success',
          title: 'You have been successfully login',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Username or password not correct',
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }


}
