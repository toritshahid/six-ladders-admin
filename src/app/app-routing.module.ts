import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AuthGuard } from "./shared/auth.guard";
import { ViewIndustryComponent } from './Industry/view-industry/view-industry.component';
import { ViewEducationComponent } from './Education/view-education/view-education.component';
import { ViewCitiesComponent } from './city/view-cities/view-cities.component';
import { ViewStateComponent } from './state/view-state/view-state.component';
const routes: Routes = [
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  // { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] }
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
