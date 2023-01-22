import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard/auth.guard';
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
    canActivate:[AuthGuard],
    children:[
      {path:'home',component:HomeComponent},
      {path:'product',loadChildren:()=> import('./modules/main-components/productinventory/productinventory.module').then(m=>m.ProductinventoryModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
