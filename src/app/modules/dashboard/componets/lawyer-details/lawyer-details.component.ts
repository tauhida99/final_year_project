import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lawyer } from 'src/app/model/lawyer';

@Component({
  selector: 'app-lawyer-details',
  templateUrl: './lawyer-details.component.html',
  styleUrls: ['./lawyer-details.component.css']
})
export class LawyerDetailsComponent implements OnInit {
  lawyer!: Lawyer
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getLawyerDetails()
  }
  getLawyerDetails() {
    console.log('router data => ', this.location.getState())
    //this logic must be rewritten so that it can be reused, on how state data can accessed
    const currentNavState = this.location.getState() as any;
    if (currentNavState) { //check if the current navigation is not null or undefined
      const lawyer = currentNavState['lawyer'] //get the state value from current navigation extras
      this.lawyer = lawyer
      if (!lawyer) {
        this.router.navigate(['/dashboard/home'])
      }
    } else {
      console.log('current navigation is null', currentNavState)
      //if the value of the selected lawyer is null then reduirect back to home page
      this.router.navigate(['/dashboard/home'])
    }
  }

}
