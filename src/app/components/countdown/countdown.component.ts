import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  fechaEvento = AppSettings.countdown;

  text = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Días",
    Hours: "Horas",
    Minutes: "Minutos",
    Seconds: "Segundos",
    MilliSeconds: "MilliSeconds"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
