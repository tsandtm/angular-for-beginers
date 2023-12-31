import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestLayoutComponent } from './guest-layout.component';
import { GuestRoutingModule } from './guest-layout.routing.module';

@NgModule({
  declarations: [
    GuestLayoutComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
  ],
  providers: [
  ]
})
export class GuestLayoutModule { }
