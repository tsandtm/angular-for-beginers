import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    UserRoutingModule
  ]
})
export class UserModule { }
