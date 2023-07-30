import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/model/case';
import { CaseServiceService } from 'src/app/services/case-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-case',
  templateUrl: './update-case.component.html',
  styleUrls: ['./update-case.component.css']
})
export class UpdateCaseComponent implements OnInit {
  public updateCase = new Case;
  caseId!: number;


  constructor(
    private caseServiceService: CaseServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUpdatedCaseInformation();
  }


  public getUpdatedCaseInformation(): void {
    this.caseId = this.activatedRoute.snapshot.params['caseId'];
    this.caseServiceService.getCaseById(this.caseId).subscribe(
      (respose: Case) => {
        this.updateCase = respose;
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


//  public onUpdateCase(updateCaseForm:NgForm) :void{
//   this.caseServiceService.updateCase(updateCaseForm.value, this.caseId).subscribe(
//     (response:Case)=>{
//       this.updateCase = response;
//       Swal.fire({
//         icon: 'success',
//         title: 'You have been successfully login',
//         showConfirmButton: false,
//         timer: 1500

//       })
//     },
//     (httpErrorResponse: HttpErrorResponse) => {
//       Swal.fire({
//         icon: 'error',
//         title: 'An error ocurred',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
//   );
// }


}
