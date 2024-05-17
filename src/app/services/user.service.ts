import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {AuthInterceptor} from "../utils/auth-interceptor";
import {map, Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user :User|null;

  readonly _backEndRoute: string = `${environment.backendUrl}/customers`;
  private http: HttpClient = inject(HttpClient);



  createUser(user: Partial<User>) {
    return this.http.post(this._backEndRoute,user,{observe:'response'}).pipe(
      tap(res=>{
        if (res.status==201) {
          this.setUpSessionStorageCredential(user.password!, res.body!.toString())
          this.getOneCustomer(res.body!.toString(), user.password!).subscribe({
            next: user => {
              this.setUpSessionStorageUser(user);
            }
          })
        }
        return res;
      })
    );
  }

  getOneCustomer(idCustomer: string, password: string):Observable<User> {
    return this.http.get<User>(`${this._backEndRoute}/${idCustomer}`)
  }

  public setUpSessionStorageCredential(password :string, id :string) {
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('id', id)
  }
  public setUpSessionStorageUser(user :User):User{
    this.user = user;
    sessionStorage.setItem('user',JSON.stringify(this.user));
    return this.user;
  }
}
