import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './share/component/not-found/not-found.component';

const routes: Routes = [
  { path: '**', component: NotFoundComponent } // Redirect mọi route không hợp lệ về 'home'

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
