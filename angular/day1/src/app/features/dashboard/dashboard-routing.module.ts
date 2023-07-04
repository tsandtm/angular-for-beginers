import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';


const dashboardsRoutes: Routes = [
  { path: "/", component: DashboardComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dashboardsRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
