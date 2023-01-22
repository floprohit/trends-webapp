import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductinventoryRoutingModule } from './productinventory-routing.module';
import { ListComponent } from './list/list.component';
import { AddeditComponent } from './addedit/addedit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    AddeditComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ProductinventoryRoutingModule,
    SharedModule
  ]
})
export class ProductinventoryModule { }
