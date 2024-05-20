import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {Item} from "../models/item";
import {UserService} from "../services/user.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ItemService} from "../services/item.service";
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ShoppingCartComponent} from "../layout/header/shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ShoppingCartComponent,
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit{
  items$ :Observable<Item[]>;
  private cdrf :ChangeDetectorRef = inject(ChangeDetectorRef)

  shoppingList : Map<Item,number>;
  itemService :ItemService = inject(ItemService);
  shoppingCartService :ShoppingCartService=inject(ShoppingCartService);


  ngOnInit() {
    this.items$=this.getItems();
    this.shoppingList = new Map<Item, number>()
    this.cdrf.detectChanges();
  }

  private getItems() :Observable<Item[]> {
    console.log("getItems")
    return this.itemService.getAllItems();
  }

  addToCart(item: Item, quantityInput: HTMLInputElement):void {
    let quantity:number = Number(quantityInput.value)
    let currentList = this.shoppingCartService.shoppingList;
    if (currentList && currentList.get(item)){
      this.shoppingCartService.updateItemQuantity(item,quantity)
    }
    else {
      this.shoppingCartService.addItem(item, quantity)
    }
    quantityInput.value='';
  }

}
