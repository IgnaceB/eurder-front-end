import {Component, inject} from '@angular/core';
import {CreateUserComponent} from "./create-user/create-user.component";
import {User} from "../models/user";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ConnectionForm} from "../fomrs/connection-form";
import {UserService} from "../services/user.service";
import {Observable, tap} from "rxjs";
import {HeaderComponent} from "../layout/header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CreateUserComponent, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {


  formBuilder: FormBuilder = inject(FormBuilder)
  connectionForm: FormGroup<ConnectionForm> = this.formBuilder.group({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  private userService: UserService = inject(UserService);


  public onSubmit(): void {
    this.userService.setUpSessionStorageCredential(this.connectionForm.value.password!, this.connectionForm.value.id!);

    this.userService.getOneCustomer(this.connectionForm.value.id!, this.connectionForm.value.password!).subscribe({
      next: user => {
        this.userService.setUpSessionStorageUser(user);
      },
      error: err => {
        if ([400,401,404].includes(err.status)) {
          alert("Wrong login")
        } else {
          alert("please contact webmaster")
        }
        this.connectionForm.reset();
      }
    })

  }


}

