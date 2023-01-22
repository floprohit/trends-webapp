import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ProductcardComponent } from './productcard/productcard.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ProductcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoaderComponent,ProductcardComponent]
})
export class SharedModule { }
