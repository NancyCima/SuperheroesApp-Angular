import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SuperheroRoutingModule } from './superhero-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSpinner } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HeroListPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    // Módulos de Angular Material
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSpinner,
  ]
})
export class SuperHeroModule { }

