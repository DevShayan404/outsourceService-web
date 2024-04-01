import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 12,
      },
    },
    nav: true,
  };

  partners = [
    {
      src: 'assets/img/partner-img-1.png',
    },
    {
      src: 'assets/img/partner-img-2.png',
    },
    {
      src: 'assets/img/partner-img-3.png',
    },
    {
      src: 'assets/img/partner-img-4.png',
    },
    {
      src: 'assets/img/partner-img-5.png',
    },
    {
      src: 'assets/img/partner-img-6.png',
    },
    {
      src: 'assets/img/partner-img-7.png',
    },
    {
      src: 'assets/img/partner-img-8.png',
    },
    {
      src: 'assets/img/partner-img-9.png',
    },
    {
      src: 'assets/img/partner-img-10.png',
    },
  ];
}
