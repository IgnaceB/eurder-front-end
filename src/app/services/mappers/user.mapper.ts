import {User} from "../../models/user";
import {FormGroup} from "@angular/forms";
import {Name} from "../../models/name";
import {CreateUserForm} from "../../fomrs/create-user-form";
import {ConnectionForm} from "../../fomrs/connection-form";

export class UserMapper {
  public createtoUser(createUserForm: FormGroup<CreateUserForm>): Partial<User> {

    let userName: Name = {
      firstName: createUserForm.value.firstName!,
      lastName: createUserForm.value.lastName!,
    };
    return {
      name: userName,
      phoneNumber: createUserForm.value.phoneNumber!,
      emailAddress: createUserForm.value.emailAddress!,
      password: createUserForm.value.password!,
      address: createUserForm.value.address!,
    };
  }

  public loginToUser(loginForm: FormGroup<ConnectionForm>): Partial<User> {
    return {
      id: loginForm.value.id!,
      password: loginForm.value.password!,
    }
  }
}

