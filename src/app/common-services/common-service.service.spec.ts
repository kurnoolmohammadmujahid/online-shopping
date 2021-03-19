import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProductsListService } from '../products-list/products-list/products-list.service';

import { CommonServiceService } from './common-service.service';
let response = [
  { id: 41, name: 'Bob' },
  { id: 42, name: 'Carol' },
  { id: 43, name: 'Ted' },
  { id: 44, name: 'Alice' },
  { id: 45, name: 'Speedy' },
  { id: 46, name: 'Stealthy' }
]
describe('CommonServiceService', () => {
  let service: CommonServiceService;
  let productsListServiceSpy: jasmine.SpyObj<ProductsListService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ProductsListService, useValue: 'spy' }]
    });
    service = TestBed.inject(CommonServiceService);
    productsListServiceSpy = TestBed.inject(ProductsListService) as jasmine.SpyObj<ProductsListService>;
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call cartCount', () => {
    service.cartCount(10);
    expect(service.cartCount).toBeDefined();
  });

  it('should call totalAmountValue', () => {
    service.totalAmountValue(100);
    expect(service.totalAmountValue).toBeDefined();
  });

  it('should call enableBackButton', () => {
    service.enableBackButton(true);
    expect(service.enableBackButton).toBeDefined();
  });

  it('should call getArraySum', () => {
    service.getArraySum([1,2,3,4]);
    expect(service.getArraySum).toBeDefined();
  });

  it('should call calculateCartValueCount', () => {
    const mySpy = spyOn(productsListServiceSpy , 'getProductsInCart');
    service.calculateCartValueCount();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });

});
