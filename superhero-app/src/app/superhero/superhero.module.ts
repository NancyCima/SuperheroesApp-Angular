import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutPageComponent,
    NewPageComponent,
    AddHeroComponent,
    HeroListComponent,
    SearchHeroComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SuperHeroModule {}
