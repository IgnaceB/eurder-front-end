import {FormControl} from "@angular/forms";

export interface CreateUserForm{
  firstName:FormControl<string|null>,
  lastName:FormControl<string|null>,
  emailAddress:FormControl<string|null>,
  phoneNumber:FormControl<string|null>,
  password:FormControl<string|null>,
  address:FormControl<string|null>,
}
