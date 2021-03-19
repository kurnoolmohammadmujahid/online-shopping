import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonServiceService } from '../../common-services/common-service.service';
import { ViewProductDetailsComponent } from '../../products-list/view-product-details/view-product-details.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'view-cart-list', component: ViewProductDetailsComponent}]
        )
      ],
      providers: [CommonServiceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.enableBack = true
    component.back();
    component.shop();
    component.viewCartList();
    component.ngDoCheck();
    expect(component).toBeTruthy();
  });

});
