import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponentModule } from 'src/app/share/components/share-component.module';
import { MemLayoutComponent } from './mem-layout.component';
import { MemLayoutRoutingModule } from './mem-layout.routing.module';



@NgModule({
  declarations: [
    MemLayoutComponent
  ],
  imports: [
    CommonModule,
    ShareComponentModule,
    MemLayoutRoutingModule
  ]
})
export class MemLayoutModule { }
