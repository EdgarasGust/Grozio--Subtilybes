import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared-module';
import { BrowserModule } from '@angular/platform-browser';

import { DetailComponent } from './swiper/detail.component';
import { ImageGalleryComponent } from './image-gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { GalleryComponent } from './image-uploader/image-uploader.component';
import { SwiperCarouselComponent } from './swiper-carousel/swiper-carousel.component';

@NgModule({
  declarations: [
    ImageGalleryComponent,
    DetailComponent,
    AuthComponent,
    GalleryComponent,
    SwiperCarouselComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    NgbModule,
    GalleryRoutingModule,
  ],
  exports: [],

  providers: [],
})
export class GalleryModule {}
