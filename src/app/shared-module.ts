import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    SwiperModule,
    SpinnerComponent,
  ],
})
export class SharedModule {}
