import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { ProductsListService } from './products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any;
  loading: any;
  constructor(private productsListService: ProductsListService,
    private route: Router,
    private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productsListService.getproducts().then(data => {
      this.products = data;
      this.loading = false;
    });
    this.commonService.calculateCartValueCount();
    setTimeout(() => {
      this.commonService.enableBackButton(false);
    }, 2000);
  }


}
