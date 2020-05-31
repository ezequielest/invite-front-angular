import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base: string = environment.urlApi;
  userID: string = AppSettings.userID;

  constructor(private http: HttpClient) { }

  getAllGuest() {
    return this.http.get(`${this.base}/guest/userId/${this.userID}`);
  }

  searchGuest(payload) {
    return this.http.post(`${this.base}/guest/search`, payload);
  }

}
