import {Component, inject, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

    protected readonly sessionStorage = sessionStorage;
    userService :UserService=inject(UserService);

    ngOnInit() {
      this.loadUserFromSession();
    }

  public loadUserFromSession() {
    const userJson = sessionStorage.getItem('user')
    if (userJson){
      this.userService.user = JSON.parse(userJson);
    }
  }

  logOut() {
    sessionStorage.clear();
    this.userService.user=null;
  }
}
