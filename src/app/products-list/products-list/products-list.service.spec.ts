import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsListService } from './products-list.service';
let addTocart = {
  "quantity": "6",
  "item": {
    "id": 3,
    "name": "Green+Flex+Fleece+Zip+Hoodie",
    "title": "Green Flex Fleece Zip Hoodie",
    "category": "mens_outerwear",
    "price": 45.65,
    "description": "Ultra soft. Ultra cozy. Our popular flex fleece hoodie now available in speckled green.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;50% cotton / 50% polyester.&amp;nbsp;&lt;/li&gt;&lt;li&gt;Made in the USA.&amp;nbsp;&lt;/li&gt;&lt;li&gt;Full-zip.&amp;nbsp;&lt;/li&gt;&lt;li&gt;Available in green with specks of blue and the white Google logo embroidered at left bicep.&amp;nbsp;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
    "image": "https://shop.polymer-project.org/esm-bundled/data/images/10-14157B.jpg",
    "largeImage": "data/images/10-14157A.jpg"
  },
  "size": "Small",
  "id": 10
};
describe('ProductsListService', () => {
  let service: ProductsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductsListService);
  });

  it('should be created', () => {
    service.addProductToCart(addTocart);
    service.deleteProductFromCart(10);
    service.getProductsInCart();
    service.getproducts();
    service.updateProductInCart(10,addTocart);
    expect(service).toBeTruthy();
  });
});
