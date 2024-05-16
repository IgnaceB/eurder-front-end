import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./login/create-user/create-user.component";

export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'subscribe',component:CreateUserComponent}
];
