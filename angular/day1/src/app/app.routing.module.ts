import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './share/components/not-found/not-found.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { MemLayoutComponent } from './layouts/mem-layout/mem-layout.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },
  /**
   * Thiết lập path và import các module phát triển trong tương lai vào
   */
  {
    path: '',
    component: MemLayoutComponent,
    loadChildren: () => import('./layouts/mem-layout/mem-layout.module').then(m => m.MemLayoutModule),
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    component: GuestLayoutComponent,
    loadChildren: () => import('./layouts/guest-layout/guest-layout.module').then(m => m.GuestLayoutModule),
    // canActivate: [AuthGuard],
  },
  /**end */

  { path: '**', component: NotFoundComponent } // Redirect mọi route không hợp lệ về 'home'
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules })  //Tự động load toàn bộ các module khác khi run xong các phần chính
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
