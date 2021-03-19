import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsListRoutingModule } from './products-list-routing-module';
import { ProductsListService } from './products-list/products-list.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { HeaderComponent } from '../common-components/header/header.component';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from 'primeng/button';
import { LoaderComponent } from '../common-components/loader/loader.component';
@NgModule({
  declarations: [
    ProductsListComponent,
    ViewProductDetailsComponent,
    HeaderComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductsListRoutingModule,
    RippleModule,
    BadgeModule,
    ButtonModule
  ],
  providers: [ProductsListService]
})
export class ProductsListModule { }
