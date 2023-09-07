import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { StarRatingComponent } from 'modules/shared/ui/src/lib/star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    StarRatingComponent,
    ReactiveFormsModule,
  ],
  declarations: [OrderListComponent],
})
export class OrdersModule {}