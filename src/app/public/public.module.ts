import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPComponent } from './login-p/login-p.component';
import { RegisterPComponent } from './register-p/register-p.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginPComponent, RegisterPComponent, LandingComponent]
})
export class PublicModule { }
