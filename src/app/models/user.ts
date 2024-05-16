import {Name} from "./name";

export interface User {
  id :string;
  name :Name;
  emailAddress :string;
  phoneNumber :string;
  role :string;
  password:string;
  address :string;
}
