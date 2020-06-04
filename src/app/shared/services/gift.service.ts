import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppSettings } from 'src/app/configs/settings.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  base: string = environment.urlApi;
  userID: string = AppSettings.userID;

  constructor(private http: HttpClient) { }

  getGifts() {
    return this.http.get(`${this.base}/gift/userId/${this.userID}`);
  }

  saveGift(payload) {
    return this.http.post(`${this.base}/gift/toGift`, payload);
  } 

}
