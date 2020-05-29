import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        items: 1
      });
    });
  }

}
