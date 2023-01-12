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
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./image-gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'services', component: SalonServicesComponent },
  { path: 'services/permanent-makeup', component: PermanentComponent },
  { path: 'services/hena', component: HenaComponent },
  { path: 'services/eylash-extension', component: EyelashesComponent },
  { path: 'services/waxing', component: WaxingComponent },
  { path: 'services/eyelash-lamination', component: LashLaminationComponent },
  {
    path: 'services/eyebrow-lamination',
    component: EyebrowLaminationComponent,
  },
  {
    path: 'services/permanent-removal',
    component: PmRemovalComponent,
  },
  {
    path: 'services/gift-card',
    component: GiftCardComponent,
  },
  { path: 'cost', component: CostComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
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
