import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/configs/settings.const';

declare const $;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  nombreNovios = AppSettings.nombreNovios;

  sliders = [{
    description: 'Nada podrá apagar el amor que sentimos el uno por el otro.'
  },{
    description: 'text 2'
  },{
    description: 'text 1'
  }]
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        items: 1
      });
    });
  }

}
