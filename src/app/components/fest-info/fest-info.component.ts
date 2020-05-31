import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-fest-info',
  templateUrl: './fest-info.component.html',
  styleUrls: ['./fest-info.component.scss']
})
export class FestInfoComponent implements OnInit {

  @Input() config;

  /*
  fas fa-swimming-pool
  fas fa-gifts
   */

  constructor() { }

  ngOnInit(): void {
  }

}
