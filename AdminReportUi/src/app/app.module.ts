import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevenuereportComponent } from './component/revenuereport/revenuereport.component';
import { GrowthreportComponent } from './component/growthreport/growthreport.component';

@NgModule({
  declarations: [
    AppComponent,
    RevenuereportComponent,
    GrowthreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
