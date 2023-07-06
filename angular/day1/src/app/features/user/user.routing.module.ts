import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
