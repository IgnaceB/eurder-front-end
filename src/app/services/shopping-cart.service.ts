import {ChangeDetectorRef, inject, Injectable, OnInit} from '@angular/core';
import {Item} from "../models/item";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService  {

  shoppingList: Map<Item, number> = new Map<Item, number>();



  constructor() {
    this.shoppingList = new Map<Item, number>();

  }

  addItem(item: Item, quantity: number) {
    console.log(this.shoppingList)
    this.shoppingList.set(item, quantity);
  }

  updateItemQuantity(item: Item, quantity: number) {
    let currentShoppingList = this.shoppingList.get(item);
    if (currentShoppingList) {
      this.shoppingList.set(item, quantity + currentShoppingList.valueOf());
    }
  }
}
