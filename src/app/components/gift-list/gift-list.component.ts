import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';
import { GiftService } from 'src/app/shared/services/gift.service';
import { GetGift, Gift } from 'src/app/interfaces/gift.interface';
import { GuestService } from 'src/app/shared/services/guest.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {

  gifts: Array<Gift>;
  giftSelected: Gift;
  guestResultSearch: any;

  constructor(private giftService: GiftService, private guestService: GuestService) { }

  ngOnInit(): void {
    this.giftService.getGifts().subscribe((res:GetGift)=>{
      this.gifts = res.response;
    });
  }

  selectGift(gift){
    this.giftSelected = gift;
  }

  sendGuest(event: FormControl){
    console.log('sendGuest ',event)

    var payload = {
      userID: AppSettings.userID,
      searchText: event.value
    }

    this.guestService.searchGuest(payload).subscribe((res:any)=>{
      this.guestResultSearch = res.response
      console.log('list guest result ',this.guestResultSearch)
    })
  }

  doGift() {

  }

}
