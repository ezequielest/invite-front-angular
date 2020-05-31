import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-whatsapp-contact',
  templateUrl: './whatsapp-contact.component.html',
  styleUrls: ['./whatsapp-contact.component.scss']
})
export class WhatsappContactComponent implements OnInit {

  inicialesNovios = AppSettings.inicialesNovios;
  nombreNovio = AppSettings.nombreNovio;
  nombreNovia = AppSettings.nombrenovia;
  telefonoNovio =  AppSettings.telefono1;
  telefonoNovia = AppSettings.telefono2;

  constructor() { }

  ngOnInit(): void {
  }

}
