import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  getproducts() {
    return this.http.get<any>(`${this.url}/products`)
      .toPromise()
      .then(data => { return data; });
  }

  getProductsInCart() {
    return this.http.get<any>(`${this.url}/addToCart`)
      .toPromise()
      .then(data => { return data; });
  }

  addProductToCart(cartData: object) {
    return this.http.post<any>(`${this.url}/addToCart`, cartData)
      .toPromise()
      .then(data => { return data; });
  }

  deleteProductFromCart(id: number) {
    return this.http.delete<any>(`${this.url}/addToCart/${id}`)
      .toPromise()
      .then(data => { return data; });
  }

  updateProductInCart(id: number, cartData: object) {
    return this.http.put<any>(`${this.url}/addToCart/${id}`, cartData)
      .toPromise()
      .then(data => { return data; });
  }




}
