import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPComponent } from './login-p/login-p.component';
import { RegisterPComponent } from './register-p/register-p.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginPComponent, RegisterPComponent]
})
export class PublicModule { }
