import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonServiceService } from 'src/app/common-services/common-service.service';

import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './products-list.service';
let mockData = {
  "id": 1,
  "name": "Men+s+Tech+Shell+Full-Zip",
  "title": "Men's Tech Shell Full-Zip",
  "category": "mens_outerwear",
  "price": 50.2,
  "description": "A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% polyester.&lt;/li&gt;&lt;li&gt;Smooth, technical front with textured mesh back.&lt;/li&gt;&lt;li&gt;Drawstring bottom for adjustable fit.&lt;/li&gt;&lt;li&gt;Raglan sleeves.&lt;/li&gt;&lt;li&gt;Available in forest green with the white Google logo embroidered at left chest.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
  "image": "https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg",
  "largeImage": "data/images/10-15068A.jpg"
};
describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let service1: ProductsListService;
  let fixture: ComponentFixture<ProductsListComponent>;
  let httpTestingController: HttpTestingController;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ProductsListComponent],
  //     imports: [
  //       RouterTestingModule,
  //       HttpClientTestingModule
  //     ],
  //     providers: [
  //       ProductsListService,
  //       CommonServiceService
  //     ]
  //   })
  //     .compileComponents();
  // });
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductsListService,
        CommonServiceService
      ]
    });
    service1 = TestBed.inject(ProductsListService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    service1.getproducts().then((dog: any) => {
      expect(dog).not.toBe(null);
      expect(JSON.stringify(dog)).toEqual(JSON.stringify(mockData));
    });

    const req = httpTestingController
      .expectOne(`http://localhost:3002/products`);

    req.flush(mockData);

    expect(component).toBeTruthy();
  });

});
