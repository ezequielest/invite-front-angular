import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GuestService } from '../../services/guest.service';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-search-guest',
  templateUrl: './search-guest.component.html',
  styleUrls: ['./search-guest.component.scss']
})
export class SearchGuestComponent implements OnInit {

  @Output() sendGuest = new EventEmitter;

  guest = new FormControl('');
  guestResultSearch

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {}

  searchGuest() {

    if (this.guest.value.length >= 3) {

      var payload = {
        userID: AppSettings.userID,
        searchText: this.guest.value
      }

      this.guestService.searchGuest(payload).subscribe((res:any)=>{
        this.guestResultSearch = res.response;
      })
    }
  }

  selectGuest(guest){
    console.log(guest)
    this.guestResultSearch = [];
    this.guest.patchValue(guest.description)
    this.sendGuest.emit(guest);
  }

}
