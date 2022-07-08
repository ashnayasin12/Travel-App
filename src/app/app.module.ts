import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { SearchPlacesComponent } from './search-places/search-places.component';
import { ViewDestinationsComponent } from './view-destinations/view-destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    SearchPlacesComponent,
    ViewDestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
