import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { AuthService } from './image-gallery/auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  state: boolean = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private authService: AuthService
  ) {}

  title = 'Grozio Subtilybes';

  ngOnInit(): void {
    this.titleService.setTitle('Grožio Subtilybės');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Blakstienų priauginimas:Klasikinės,Mix,Volume,Kim Kardashian.Ilgalaikis/Permanentinis makiažas.Depiliacija vašku.Antakių dažymas.Blakstienų laminavimas.Kaunas, Senamiestis',
      },
      {
        name: 'keywords',
        content:
          'Blakstienų priauginimas, Ilgalaikis Makiažas, Depiliacija Vašku, Antakių Dažymas, Blakstienų Laminavimas! Kaunas - Senamiestis!',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ]);
    this.authService.autoLogin();
    this.state = true;
  }

  ngAfterViewInit(): void {
    this.facebookChatBox();
  }

  facebookChatBox() {
    const chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute('page_id', '101819517953151');
      chatbox.setAttribute('attribution', 'biz_inbox');
    }
  }
}
