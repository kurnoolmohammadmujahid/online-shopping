import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCartDetailsComponent } from './view-cart-details/view-cart-details.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCartDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerCartRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/