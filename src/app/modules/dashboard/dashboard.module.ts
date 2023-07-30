import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './componets/home/home.component';
import { MyDashboardComponent } from './componets/my-dashboard/my-dashboard.component';
import { ListUsersComponent } from './componets/list-users/list-users.component';
import { ListCasesComponent } from './componets/list-cases/list-cases.component';
import { UpdateUserComponent } from './componets/update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateCaseComponent } from './componets/update-case/update-case.component';
import { RegisterCaseComponent } from './componets/register-case/register-case.component';
import { MyCaseComponent } from './componets/my-case/my-case.component';
import { ListCaseProceedingComponent } from './componets/list-case-proceeding/list-case-proceeding.component';
import { ListLawyerComponent } from './componets/list-lawyer/list-lawyer.component';
import { LawyerDetailsComponent } from './componets/lawyer-details/lawyer-details.component';
import { MyCaseProceedingComponent } from './componets/my-case-proceeding/my-case-proceeding.component';
import { MyClientComponent } from './componets/my-lawyer-client-case/my-client.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyDashboardComponent,
    ListUsersComponent,
    ListCasesComponent,
    UpdateUserComponent,
    UpdateCaseComponent,
    RegisterCaseComponent,
    MyCaseComponent,
    ListCaseProceedingComponent,
    ListLawyerComponent,
    LawyerDetailsComponent,
    MyCaseProceedingComponent,
    MyClientComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ]
})
export class DashboardModule { }
