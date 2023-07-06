import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/features/auth/auth.guard';
import { ProductComponent } from 'src/app/features/product/product.component';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { UserComponent } from 'src/app/features/user/user.component';

 const memLayoutRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'products',
    component: ProductComponent,
    loadChildren: () => import('../../features/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'account',
    component: UserComponent,
    loadChildren: () => import('../../features/user/user.module').then(m => m.UserModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(memLayoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MemLayoutRoutingModule { }
