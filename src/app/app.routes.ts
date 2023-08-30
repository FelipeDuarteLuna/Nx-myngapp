import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';

export const appRoutes: Route[] = [
    {
        path:'', pathMatch:'full', component: HelloWordComponent
    },
    {
        path: 'products', loadChildren: () => import('modules/products').then(m => m.ProductsModule)
    },
    {
        path: 'orders', loadChildren: () => import('modules/orders').then(m => m.OrdersModule)
    }
];
