import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent } from './modules/auth-components/login/login.component';
import { HomeComponent } from './modules/main-components/home/home.component';

const routes: Routes = [
  {
path:"",
pathMatch:'full',
redirectTo:"/login"
  },
  {
    path:"",
    component:AuthComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
