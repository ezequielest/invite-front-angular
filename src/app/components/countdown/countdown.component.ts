import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

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
