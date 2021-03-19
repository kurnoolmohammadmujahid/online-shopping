import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { ProductsListService } from '../products-list/products-list.service';
declare var document: any;
@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
  product: any;
  paramId: any;
  size: any = "Small";
  quantity: any = "1";
  loading: any;
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private productsListService: ProductsListService,
    private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this._Activatedroute.paramMap.subscribe(params => {
      this.paramId = params.get('productId');
      console.log(this.paramId);
      this.productsListService.getproducts().then(data => {
        for (let item of data) {
          if (item.id == this.paramId) {
            this.product = item;
            console.log(this.product);
            document.getElementById("Description").innerHTML = this.product.description;
          }
        }
      });
    });
    this.commonService.calculateCartValueCount();
    setTimeout(() => {
      this.commonService.enableBackButton(true);
      this.loading = false;
    }, 2000);
  }

  getArraySum(a: any) {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }


  cartCount() {
    //  this.commonService.cartCount(1);
    this.loading = true;
    let obj = {
      quantity: this.quantity,
      item: this.product,
      size: this.size
    }
    this.productsListService.addProductToCart(obj).then(data => {
      console.log(data);
      this.commonService.calculateCartValueCount();
      this.loading = false;
    });
  }

}
