import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-guest',
  templateUrl: './search-guest.component.html',
  styleUrls: ['./search-guest.component.scss']
})
export class SearchGuestComponent implements OnInit {

  @Output() sendGuest = new EventEmitter;

  guest = new FormControl('');

  constructor() { }

  ngOnInit(): void {}

  searchGuest(event) {
    this.sendGuest.emit(this.guest);
  }

}
