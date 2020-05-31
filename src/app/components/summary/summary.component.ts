import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  descripcionFecha = AppSettings.fechaDescripcionFiesta;
  customText = AppSettings.summaryText;

  constructor() { }

  ngOnInit(): void {
  }

}
