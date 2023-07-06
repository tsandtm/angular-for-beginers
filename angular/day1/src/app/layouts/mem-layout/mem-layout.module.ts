import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponentModule } from 'src/app/share/components/share-component.module';
import { MemLayoutRoutingModule } from './mem-layout.routing.module';
import { MemLayoutComponent } from './mem-layout.component';



@NgModule({
  declarations: [
    MemLayoutComponent
  ],
  imports: [
    CommonModule,
    MemLayoutRoutingModule,
    ShareComponentModule,
  ]
})
export class MemLayoutModule { }
