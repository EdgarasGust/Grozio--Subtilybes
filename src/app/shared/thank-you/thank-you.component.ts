import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  @Input() name: string = '';
  @Input() resMessage: Message = {
    heading: '',
    message: '',
  };

  @Output() close = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.close.next(false);
    this.resMessage = {
      heading: '',
      message: '',
    };
  }
}
