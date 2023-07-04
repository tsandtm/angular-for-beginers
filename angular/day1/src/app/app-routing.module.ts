import { DashboardComponent } from './features/dashboard/component/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './share/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  { path: '**', component: NotFoundComponent } // Redirect mọi route không hợp lệ về 'home'

]

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules })  //Tự động load toàn bộ các module khác khi run xong các phần chính
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
