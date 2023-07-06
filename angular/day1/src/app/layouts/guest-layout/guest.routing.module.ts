import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const guestRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../features/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(guestRoutes),
  ],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
