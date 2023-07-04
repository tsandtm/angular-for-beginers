import { DashboardComponent } from './features/dashboard/component/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './share/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'product',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  { path: '**', component: NotFoundComponent } // Redirect mọi route không hợp lệ về 'home'

]

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
