import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditComponent } from './addedit/addedit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'add',component:AddeditComponent},  
  {path:'edit/:id',component:AddeditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductinventoryRoutingModule { }
