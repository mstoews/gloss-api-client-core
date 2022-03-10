import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shell/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signup/signup.component';
import { UserListComponent } from './userlist/userlist';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, UserListComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
