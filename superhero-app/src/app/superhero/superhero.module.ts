import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroRoutingModule } from './superhero-routing.module';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeroListPageComponent,
    AddheroPageComponent,
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    MaterialModule,
  ],
  exports: [MaterialModule]
})
export class SuperHeroModule { }
