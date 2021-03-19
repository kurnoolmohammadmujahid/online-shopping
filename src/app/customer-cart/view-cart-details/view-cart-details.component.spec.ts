import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipliedAmountPipe } from '../../common-pipes/multiplied-amount.pipe';
import { TotalAmountPipe } from '../../common-pipes/total-amount.pipe';
import { CommonServiceService } from '../../common-services/common-service.service';
import { ProductsListService } from '../../products-list/products-list/products-list.service';

import { ViewCartDetailsComponent } from './view-cart-details.component';

describe('ViewCartDetailsComponent', () => {
  let component: ViewCartDetailsComponent;
  let listService: ProductsListService;
  let commonService: CommonServiceService;
  let cdr: ChangeDetectorRef;
  let fixture: ComponentFixture<ViewCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewCartDetailsComponent,
        TotalAmountPipe,
        MultipliedAmountPipe],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProductsListService,
        CommonServiceService,
        ChangeDetectorRef
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCartDetailsComponent);
    component = fixture.componentInstance;
    listService = TestBed.inject(ProductsListService);
    commonService = TestBed.inject(CommonServiceService);
    component.cartDetails = [
      {
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
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    commonService.viewTotalAmountDetails.subscribe((obj) => {
      component.totalAmount = obj;
      cdr.detectChanges();
    });
    setTimeout(() => {
      commonService.enableBackButton(false);
      component.loading = false;
    }, 2000);
    component.ngOnInit();
    component.delete(10);
    component.cartItemQtyChanged(component.cartDetails[0]);
    expect(component).toBeTruthy();
  });
});
