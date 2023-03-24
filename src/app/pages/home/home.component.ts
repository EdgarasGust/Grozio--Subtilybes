import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slidingText', [
      transition(':enter', [
        query('#one', style({ opacity: 0, transform: 'translateY(30px)' })),
        query(
          '#one',
          stagger('400ms', [
            animate(
              '700ms 1.6s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ])
        ),
      ]),
    ]),
    trigger('mainImage', [
      transition(':enter', [
        query('#two', style({ opacity: 0 })),
        query(
          '#two',
          stagger('400ms', [
            animate('400ms 1.5s ease-out', style({ opacity: 1 })),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  @ViewChildren('anim', { read: ElementRef })
  state: any;
}
