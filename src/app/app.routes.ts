import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ReportComponent } from './CURD/report/report.component';
import { LoginComponent } from './CURD/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './CURD/register/register.component';

export const routes: Routes = [

  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path:'report',component:ReportComponent},
  { path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  



];
