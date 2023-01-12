import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { fromEvent, Subject, Subscription } from 'rxjs';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-swiper',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;

  @Input() visibleImages: any[] = [];
  @Input() index: number = 1;
  @Output() close = new Subject<boolean>();
  closeSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    history.pushState(null, '');
    this.closeSubscription = fromEvent(window, 'popstate').subscribe((_) => {
      this.close.next(false);
    });
  }

  ngAfterViewInit(): void {
    if (this.swiper) {
      this.swiper.swiperRef.slideTo(this.index, 0);
    }
  }
  ngOnDestroy(): void {
    this.closeSubscription.unsubscribe();
  }
}
