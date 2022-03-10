import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { UserListComponent } from './userlist/userlist';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: SignUpComponent },
  { path: 'userlist', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
