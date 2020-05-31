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
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AttendComponent } from './components/attend/attend.component';
import { WhatsappContactComponent } from './components/whatsapp-contact/whatsapp-contact.component';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    FooterComponent,
    AttendComponent,
    GiftListComponent,
    LoadingComponent,
    WhatsappContactComponent,
    FormEmailComponent

  ],
  imports: [
    BrowserModule,
    CountdownModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
