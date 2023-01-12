import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperCarouselComponent implements OnInit {
  images: any[] = [
    '../../../assets/carousel/carousel-02.webp',
    '../../../assets/carousel/carousel-04.webp',
    '../../../assets/carousel/carousel-05.webp',
    '../../../assets/carousel/carousel-08.webp',
    '../../../assets/carousel/carousel-06.webp',
    '../../../assets/carousel/carousel-03.webp',
    '../../../assets/carousel/carousel-07.webp',
  ];
  config: SwiperOptions = {
    virtual: true,
    autoplay: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
