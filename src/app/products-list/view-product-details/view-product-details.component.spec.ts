import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CommonServiceService } from '../../common-services/common-service.service';
import { ProductsListService } from '../products-list/products-list.service';
import { ViewProductDetailsComponent } from './view-product-details.component';

class MockProductListService {
  static getproducts() {
    return {
      "id": 1,
      "name": "Men+s+Tech+Shell+Full-Zip",
      "title": "Men's Tech Shell Full-Zip",
      "category": "mens_outerwear",
      "price": 50.2,
      "description": "A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% polyester.&lt;/li&gt;&lt;li&gt;Smooth, technical front with textured mesh back.&lt;/li&gt;&lt;li&gt;Drawstring bottom for adjustable fit.&lt;/li&gt;&lt;li&gt;Raglan sleeves.&lt;/li&gt;&lt;li&gt;Available in forest green with the white Google logo embroidered at left chest.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
      "image": "https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg",
      "largeImage": "data/images/10-15068A.jpg"
    }
  }
}

describe('ViewProductDetailsComponent', () => {
  let component: ViewProductDetailsComponent;
  let fixture: ComponentFixture<ViewProductDetailsComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ViewProductDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => {
                return ({ id: 123 });
              }
            })
          }
        },
        // {
        //   provide: ProductsListService,
        //   useclass: MockProductListService
        // },
        CommonServiceService,
        ProductsListService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductDetailsComponent);
    component = fixture.componentInstance;
    component.product = {
      "id": 1,
      "name": "Men+s+Tech+Shell+Full-Zip",
      "title": "Men's Tech Shell Full-Zip",
      "category": "mens_outerwear",
      "price": 50.2,
      "description": "A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.&amp;nbsp;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Features:&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;100% polyester.&lt;/li&gt;&lt;li&gt;Smooth, technical front with textured mesh back.&lt;/li&gt;&lt;li&gt;Drawstring bottom for adjustable fit.&lt;/li&gt;&lt;li&gt;Raglan sleeves.&lt;/li&gt;&lt;li&gt;Available in forest green with the white Google logo embroidered at left chest.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;",
      "image": "https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg",
      "largeImage": "data/images/10-15068A.jpg"
    };
    component.quantity = '2';
    component.size = 'M';
    fixture.detectChanges();

  });

  it('should create', () => {
    component.getArraySum([1,2,3,4]);
    component.cartCount();
    
    expect(component).toBeTruthy();
  });


});
