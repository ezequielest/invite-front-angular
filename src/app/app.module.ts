import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountdownModule } from "ng2-date-countdown";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FestInfoComponent } from './components/fest-info/fest-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CountdownComponent,
    SummaryComponent,
    FestInfoComponent,
    ContactComponent,
    ImageGalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
