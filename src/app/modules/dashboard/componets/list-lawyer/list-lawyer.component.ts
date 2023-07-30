import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lawyer } from 'src/app/model/lawyer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LawyerService } from 'src/app/services/lawyer.service';

@Component({
  selector: 'app-list-lawyer',
  templateUrl: './list-lawyer.component.html',
  styleUrls: ['./list-lawyer.component.css']
})
export class ListLawyerComponent implements OnInit {
  public lawyers!: Lawyer[];
  data!: any;

  constructor(
    private lawyerService: LawyerService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllLawyers();
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



}
