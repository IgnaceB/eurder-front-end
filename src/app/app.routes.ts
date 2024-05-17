import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./login/create-user/create-user.component";
import {ItemsComponent} from "./items/items.component";

export const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'',component:LoginComponent,outlet:'login'},
  {path:'subscribe',component:CreateUserComponent,outlet:'login'}
];
