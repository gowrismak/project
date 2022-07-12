import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogindetComponent } from './logindet/logindet.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LogindetComponent},
    {path:'login',component:LogindetComponent},
   {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*export const routingComponents =[LogindetComponent,
  DashboardComponent,RegisterComponent,NavbarComponent]*/