import {Component, inject} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "../login/login.component";
import {RouterOutlet} from "@angular/router";
import {UserService} from "../services/user.service";
import {CreateUserComponent} from "../login/create-user/create-user.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, LoginComponent, CreateUserComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  userService :UserService =inject(UserService);


}
