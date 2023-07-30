import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from './componets/home/home.component';
import { LawyerDetailsComponent } from './componets/lawyer-details/lawyer-details.component';
import { ListCaseProceedingComponent } from './componets/list-case-proceeding/list-case-proceeding.component';
import { ListCasesComponent } from './componets/list-cases/list-cases.component';
import { ListLawyerComponent } from './componets/list-lawyer/list-lawyer.component';
import { ListUsersComponent } from './componets/list-users/list-users.component';
import { MyCaseProceedingComponent } from './componets/my-case-proceeding/my-case-proceeding.component';
import { MyCaseComponent } from './componets/my-case/my-case.component';
import { MyClientComponent } from './componets/my-lawyer-client-case/my-client.component';
import { MyDashboardComponent } from './componets/my-dashboard/my-dashboard.component';
import { RegisterCaseComponent } from './componets/register-case/register-case.component';
import { UpdateCaseComponent } from './componets/update-case/update-case.component';
import { UpdateUserComponent } from './componets/update-user/update-user.component';

const routes: Routes = [
  {
    path: '', component: MyDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list-users', component: ListUsersComponent },
      { path: 'list-cases', component: ListCasesComponent },
      { path: 'list-lawyer', component: ListLawyerComponent },
      { path: 'lawyer-details', component: LawyerDetailsComponent },
      { path: 'my-cases', component: MyCaseComponent },
      { path: 'my-case-proceeding', component: MyCaseProceedingComponent },
      { path: 'my-client', component: MyClientComponent },
      { path: 'update-user/:userId', component: UpdateUserComponent },
      { path: 'update-case/:caseId', component: UpdateCaseComponent },
      { path: 'register-case', component: RegisterCaseComponent },
      { path: 'list-case-proceeding', component: ListCaseProceedingComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: "/dashboard/home", pathMatch: "full" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
