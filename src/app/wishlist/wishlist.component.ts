//Title:  wishlist.component.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the wishlist component.

import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //this takes the wishlistitem objects and adds it to the array above.
  updateItemsHandler(item: IWishListItem) {
    this.items.push(item);
  }

}
