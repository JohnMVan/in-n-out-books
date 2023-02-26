//Title:  wishlist-create.component.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the wishlist-create component.

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {

    this.item = {} as IWishListItem;    //casting {} object literal to type IWishListItem
   }

  ngOnInit(): void {
  }

  //When a user adds a wish list item, this function will be called and those items will be emitted to the wish-list item component 
  //emit the values entered in by the user -title and authors
  addItem() {
    this.addItemEmitter.emit({      
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishListItem;     //after emitting the items, this resets the item back to an empty literal.
  }

}
