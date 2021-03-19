import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { ProductsListService } from 'src/app/products-list/products-list/products-list.service';

@Component({
  selector: 'app-view-cart-details',
  templateUrl: './view-cart-details.component.html',
  styleUrls: ['./view-cart-details.component.scss']
})
export class ViewCartDetailsComponent implements OnInit {
  cartDetails: any;
  totalAmount: any;
  loading: any;
  constructor(private ref: ChangeDetectorRef,
    private commonService: CommonServiceService,
    private cartListService: ProductsListService) { }

  ngOnInit(): void {
    this.loading = true;
    this.commonService.calculateCartValueCount();
    this.getCartData();
    this.totalAmountSum();
    this.commonService.viewTotalAmountDetails.subscribe((obj) => {
      this.totalAmount = obj;
      this.ref.detectChanges();
    });
    setTimeout(() => {
      this.commonService.enableBackButton(false);
      this.loading = false;
    }, 2000);
  }

  getCartData() {
    this.cartListService.getProductsInCart().then(data => {
      console.log(data);
      this.cartDetails = data;
    });
  }

  delete(item: any) {
    console.log(item);
    this.loading = true;
    this.cartListService.deleteProductFromCart(item.id).then(data => {
      console.log(data);
      this.commonService.calculateCartValueCount();
      this.getCartData();
      this.totalAmountSum();
      this.loading = false;
    });
  }

  cartItemQtyChanged(eve: any) {
    this.loading = true;
    this.cartListService.updateProductInCart(eve.id, eve).then(data => {
      console.log(data);
      this.commonService.calculateCartValueCount();
      this.getCartData();
      this.totalAmountSum();
      this.loading = false;
    });
  }

  totalAmountSum() {
    this.commonService.calculateCartTotalAmount();
    // this.totalAmount = this.commonService.calculateCartTotalAmount();
    // console.log("this.totalAmount", this.totalAmount)
  }

}
