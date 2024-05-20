import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../models/item";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly _backEndRoute :string;
  constructor(private http:HttpClient) {
    this._backEndRoute = `${environment.backendUrl}/items`
  }

  getAllItems():Observable<Item[]> {
    console.log(this._backEndRoute);
    return this.http.get<Item[]>(this._backEndRoute).pipe(
      tap(element=>console.log(element)),
      tap(item => item.forEach(thisItem=>(console.log(item))))
    )
  }
}
