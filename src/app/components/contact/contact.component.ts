import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  iniciales = AppSettings.inicialesNovios;
  instagram = 'https://www.instagram.com' + AppSettings.instagram;
  facebook = 'https://www.facebook.com' + AppSettings.facebook;

  constructor() { }

  ngOnInit(): void {
  }

}
