import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CostComponent } from './pages/cost/cost.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EyebrowLaminationComponent } from './pages/salon-services/eyebrow-lamination/eyebrow-lamination.component';
import { EyelashesComponent } from './pages/salon-services/eyelashes/eyelashes.component';
import { GiftCardComponent } from './pages/salon-services/gift-card/gift-card.component';
import { HenaComponent } from './pages/salon-services/hena/hena.component';
import { LashLaminationComponent } from './pages/salon-services/lash-lamination/lash-lamination.component';
import { PermanentComponent } from './pages/salon-services/permanent/permanent.component';
import { PmRemovalComponent } from './pages/salon-services/pm-removal/pm-removal.component';
import { SalonServicesComponent } from './pages/salon-services/salon-services.component';
import { WaxingComponent } from './pages/salon-services/waxing/waxing.component';

const appRoutes: Routes = [
  {
    path: 'galerija',
    title: 'Galerija',
    loadChildren: () =>
      import('./image-gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: 'apie-mane', title: 'Apie', component: AboutMeComponent },
  {
    path: 'paslaugos',
    title: 'Paslaugos',
    component: SalonServicesComponent,
  },
  {
    path: 'paslaugos/ilgalaikis-makiažas',
    title: 'Ilgalaikis makiažas',
    component: PermanentComponent,
  },
  {
    path: 'paslaugos/antakių-dažymas',
    title: 'Henna',
    component: HenaComponent,
  },
  {
    path: 'paslaugos/blakstienų-priauginimas',
    title: 'Blakstienų priauginimas',
    component: EyelashesComponent,
  },
  {
    path: 'paslaugos/depiliacija',
    title: 'Depiliacija',
    component: WaxingComponent,
  },
  {
    path: 'paslaugos/blakstienų-laminavimas',
    title: 'Blakstienų laminavimas',
    component: LashLaminationComponent,
  },
  {
    path: 'paslaugos/antakių-laminavimas',
    title: 'Antakių laminavimas',
    component: EyebrowLaminationComponent,
  },
  {
    path: 'paslaugos/Ilgalaikio-šalinimas',
    title: 'Šalinimas',
    component: PmRemovalComponent,
  },
  {
    path: 'paslaugos/dovanų-kuponas',
    title: 'Dovanų kuponas',
    component: GiftCardComponent,
  },
  { path: 'kainos', title: 'Kainos', component: CostComponent },
  { path: 'kontaktai', title: 'Kontaktai', component: ContactsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  {
    path: '',
    title: 'Pagrindinis',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
