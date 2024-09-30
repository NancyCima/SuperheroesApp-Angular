import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroRoutingModule } from './superhero-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';

@NgModule({
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    HeroListPageComponent,
    AddheroPageComponent,
    // Módulos de Angular Material
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSpinner,
  ]
})
export class SuperHeroModule { }
