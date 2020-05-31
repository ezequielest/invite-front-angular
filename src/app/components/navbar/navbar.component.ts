import { Component, OnInit, HostListener } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iniciales = AppSettings.inicialesNovios;

  blackHeader = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.blackHeader = window.pageYOffset > 50 ? true : false;
  }

}
