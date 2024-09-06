import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchHeroComponent } from '../superhero/components/search-hero/search-hero.component';
import { HeroListComponent } from '../superhero/components/hero-list/hero-list.component';
import { AddHeroComponent } from '../superhero/components/add-hero/add-hero.component';

@NgModule({
  declarations: [NavBarComponent,
    SearchHeroComponent,
    HeroListComponent,
    AddHeroComponent
  ],
  imports: [CommonModule],
  exports: [NavBarComponent,
    SearchHeroComponent,
    HeroListComponent,
    AddHeroComponent
  ]
})
export class SharedModule {}
