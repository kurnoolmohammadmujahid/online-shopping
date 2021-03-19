import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartDetailsComponent } from './view-cart-details/view-cart-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerCartRoutingModule } from './customer-cart-routing-module';
import { HeaderComponent } from '../common-components/header/header.component';
import { ProductsListModule } from '../products-list/products-list.module';
import { TotalAmountPipe } from '../common-pipes/total-amount.pipe';
import { MultipliedAmountPipe } from '../common-pipes/multiplied-amount.pipe';


@NgModule({
  declarations: [
    ViewCartDetailsComponent,
    TotalAmountPipe,
    MultipliedAmountPipe
  ],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomerCartRoutingModule,
    ProductsListModule,
  ]
})
export class CustomerCartModule { }
