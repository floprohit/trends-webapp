import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ReactiveFormsModule,FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent } from './modules/auth-components/login/login.component';
import { HomeComponent } from './modules/main-components/home/home.component';
import { ErrorsComponent } from './core/forms-errors/errors/errors.component';
import { CustomValidationsDirective } from './core/directives/custom-validations/custom-validations.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    ErrorsComponent,
    CustomValidationsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
