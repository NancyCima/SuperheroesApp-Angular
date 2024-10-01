import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroRoutingModule } from './superhero-routing.module';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { MaterialModule } from '../material/material.module';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroListPageComponent,
    AddheroPageComponent,
    SearchPageComponent,
    AddHeroComponent,
    HeroListComponent,
    SearchHeroComponent,
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
  ],
})
export class SuperHeroModule {}
