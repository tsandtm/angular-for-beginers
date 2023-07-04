import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/app-top-bar/app-top-bar.component';

// import { ProductModule } from './features/product/product.module';
import { NotFoundComponent } from './share/component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ProductModule,
    AppRoutingModule,//import sau cung
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
