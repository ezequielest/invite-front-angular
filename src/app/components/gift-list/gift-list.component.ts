import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';
import { GiftService } from 'src/app/shared/services/gift.service';
import { GetGift, Gift } from 'src/app/interfaces/gift.interface';
import { GuestService } from 'src/app/shared/services/guest.service';
import { FormControl } from '@angular/forms';
import { Guest } from 'src/app/interfaces/guest.interface';

declare const $;

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {

  gifts: Array<Gift>;
  giftSelected: Gift;
  guestSelected: Guest;
  guestResultSearch: Array<Guest>;

  constructor(private giftService: GiftService, private guestService: GuestService) { }

  ngOnInit(): void {
    this.getGift();
  }

  getGift(){
    this.giftService.getGifts().subscribe((res:GetGift)=>{
      this.gifts = res.response;
    });
  }

  selectGift(gift){
    this.giftSelected = gift;
  }

  selectGuest(guest) {
    this.guestSelected = guest;
  }

  doGift() {
      var payload = {
        giftedBy: this.guestSelected._id,
        gift: this.giftSelected._id,
        cant: 1,
        userID: AppSettings.userID,
        isMoney: false
      }

      this.giftService.saveGift(payload).subscribe(res =>{
        $('#giftModal').modal('hide');
        this.getGift();
      });
    
  }

}
