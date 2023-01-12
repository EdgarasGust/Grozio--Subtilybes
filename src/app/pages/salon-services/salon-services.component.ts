import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './salon-services.component.html',
  styleUrls: ['./salon-services.component.scss'],
})
export class SalonServicesComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags(
      [
        { name: 'description', content: 'Grožio subtilybes - Paslaugos' },
        {
          name: 'keywords',
          content:
            'Blakstienu priauginimas, Permanentas, Depiliacija, Antakiai, Kauans',
        },
      ],
      true
    );
  }
}
