import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {CreateUserForm} from "../../fomrs/create-user-form";
import {UserMapper} from "../../services/mappers/user.mapper";
import {Observer, pipe} from "rxjs";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {


  readonly formBuilder :FormBuilder = inject(FormBuilder);
  createUserForm: FormGroup<CreateUserForm> = this.formBuilder.group({
    firstName:'',
    lastName:'',
    emailAddress:'',
    address:'',
    phoneNumber:'',
    password:'',
  });

  readonly userService :UserService = inject(UserService)
  readonly userMapper :UserMapper = new UserMapper();

  onSubmit():void{
    const observer:Observer<any> = {
      next: res => res,
      error: err =>{
        let errorMessage :string=`${err.error.message}\n----\n`
        for(const property in err.error.errors) {
          errorMessage += `${property} : ${err.error.errors[property]}\n----\n`;
        }
        alert(errorMessage)
      console.log(err)},
      complete: () => this.createUserForm.reset(),
    };

    this.userService.createUser(this.userMapper.createtoUser(this.createUserForm)).subscribe(
      observer);


  }


}
