import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGuestComponent } from './components/search-guest/search-guest.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchGuestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchGuestComponent
  ]
})
export class SharedModule { }
