import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboardsRoutes: Routes = [
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dashboardsRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
