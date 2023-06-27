import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './app-top-bar/app-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
