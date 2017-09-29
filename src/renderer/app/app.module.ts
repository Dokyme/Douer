import { PrimeNgComponentModule } from './primeng.component.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
