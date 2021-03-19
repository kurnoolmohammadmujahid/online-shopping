import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListModule } from './products-list/products-list.module';
import { CustomerCartModule } from './customer-cart/customer-cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsListModule,
    CustomerCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
