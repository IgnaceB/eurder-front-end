import {Component, inject} from '@angular/core';
import {CreateUserComponent} from "./create-user/create-user.component";
import {User} from "../models/user";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ConnectionForm} from "../fomrs/connection-form";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CreateUserComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  private user :User;
  formBuilder :FormBuilder = inject(FormBuilder)
  connectionForm :FormGroup<ConnectionForm> = this.formBuilder.group({
    id:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })


  public onSubmit() :void {
    sessionStorage.setItem('password',JSON.stringify(this.connectionForm.value.password));
    sessionStorage.setItem('id',JSON.stringify(this.connectionForm.value.id))
    console.log(sessionStorage.getItem('password'))
    }

  }

