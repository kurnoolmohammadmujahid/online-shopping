import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products-list',
    loadChildren: () => import('./products-list/products-list.module').then(mod => mod.ProductsListModule)
  },
  {
    path: 'view-cart-list',
    loadChildren: () => import('./customer-cart/customer-cart.module').then(mod => mod.CustomerCartModule)
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
