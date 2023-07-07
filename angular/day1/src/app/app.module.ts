import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './share/shared.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './share/components/not-found/not-found.component';

import { ThemeSettingsService } from './layouts/theme-settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // ProductModule,
    // AuthModule,

    /** Module root routes của ứng dụng. import sau cung */
    SharedModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ThemeSettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
