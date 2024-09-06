import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHeroComponent } from './superhero/components/add-hero/add-hero.component';
import { HeroListComponent } from './superhero/components/hero-list/hero-list.component';
import { SearchHeroComponent } from './superhero/components/search-hero/search-hero.component';
import { SharedModule } from './shared/shared.module';
import { SearchPageComponent } from './superhero/pages/search-page/search-page.component';
import { HerolistPageComponent } from './superhero/pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './superhero/pages/addhero-page/addhero-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent,
    HeroListComponent,
    SearchHeroComponent,
    SearchPageComponent,
    HerolistPageComponent,
    AddheroPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
