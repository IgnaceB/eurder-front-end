import {AfterContentChecked, ChangeDetectorRef, Component, inject, Input, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {ShoppingCartService} from "../../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit{

  @Input()
  shoppingList :Map<Item, number> = new Map<Item, number>();

  private shoppingCartService :ShoppingCartService=inject(ShoppingCartService);


  ngOnInit() {
    this.loadShoppingList();
  }
  loadShoppingList(){
    this.shoppingList=this.shoppingCartService.shoppingList;

  }
}
