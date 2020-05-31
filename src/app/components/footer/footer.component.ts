import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currrentYear: number;

  constructor() {
    this.currrentYear = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
