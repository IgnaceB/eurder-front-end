import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {AuthInterceptor} from "../utils/auth-interceptor";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly _backEndRoute: string = `${environment.backendUrl}/customers`;
  private http: HttpClient = inject(HttpClient);



  createUser(user: Partial<User>) {
    return this.http.post(this._backEndRoute,user,{observe:'response'});
  }


}
