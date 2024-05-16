import {FormControl} from "@angular/forms";

export interface ConnectionForm{

  password:FormControl<string|null>,
  id:FormControl<string|null>,

}
