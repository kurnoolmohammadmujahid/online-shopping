import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsListService } from '../products-list/products-list/products-list.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private cartListService: ProductsListService) { }
  viewCartDetails: Subject<any> = new Subject<any>();
  viewTotalAmountDetails: Subject<any> = new Subject<any>();
  enableBackDetails: Subject<any> = new Subject<any>();

  cartCount(message: any) {
    this.viewCartDetails.next(message);
  }

  totalAmountValue(message: any) {
    this.viewTotalAmountDetails.next(message);
  }

  enableBackButton(message: any) {
    this.enableBackDetails.next(message);
  }

  getArraySum(a: any) {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
    // return array.reduce((a: any, b: any) => a + b, 0)
  }

  calculateCartValueCount() {
    this.cartListService.getProductsInCart().then(data => {
      console.log(data);
      let quantityChecks = [];
      for (let i = 0; i < data.length; i++) {
        quantityChecks.push(parseInt(data[i].quantity));
      }
      this.cartCount(this.getArraySum(quantityChecks));
    });
  }

  calculateCartTotalAmount() {
    this.cartListService.getProductsInCart().then(data => {
      console.log(data);
      let quantityChecks = [];
      for (let i = 0; i < data.length; i++) {
        quantityChecks.push(parseInt(data[i].quantity) * parseFloat(data[i].item.price));
      }
      this.totalAmountValue(quantityChecks);
      // this.totalAmountValue(this.getArraySum(quantityChecks));
      // return quantityChecks;
    });
  }

}
