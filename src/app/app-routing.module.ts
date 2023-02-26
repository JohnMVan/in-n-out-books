//Title:  app-routing.module.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the app component.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';   //added 6.2

const routes: Routes = [
  {
    path: '',
    component: BookListComponent    
  },
  {
    path: 'book-list',
    component: BookListComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
