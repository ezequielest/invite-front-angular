import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGuestComponent } from './components/search-guest/search-guest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';

@NgModule({
  declarations: [SearchGuestComponent, MessageModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchGuestComponent,
    MessageModalComponent
  ]
})
export class SharedModule { }
