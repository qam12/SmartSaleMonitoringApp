import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { NgSelectModule } from '@ng-select/ng-select';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4y9znGOIhqwC3d_do5PBiRsqB6iI0Xmg'
    }),
    AgmJsMarkerClustererModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
