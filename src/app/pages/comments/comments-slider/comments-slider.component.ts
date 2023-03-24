import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Comments } from 'src/app/shared/comments';
import { CommentsService } from 'src/app/shared/comments.service';
import SwiperCore, {
  SwiperOptions,
  Virtual,
  Navigation,
  Scrollbar,
} from 'swiper';
SwiperCore.use([Virtual, Navigation, Scrollbar]);

@Component({
  selector: 'app-comments-slider',
  templateUrl: './comments-slider.component.html',
  styleUrls: ['./comments-slider.component.scss'],
})
export class CommentsSliderComponent {
  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,

    scrollbar: { draggable: true },
    virtual: true,
    breakpoints: {
      410: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      810: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  comment$: Observable<Comments[]> = this.commentsService.comments$;

  constructor(private commentsService: CommentsService) {}

  trackById(index: number, comment: any) {
    return comment.id;
  }
}
