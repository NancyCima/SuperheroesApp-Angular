import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHeroComponent } from './superhero/components/add-hero/add-hero.component';
import { HeroListComponent } from './superhero/components/hero-list/hero-list.component';
import { SearchHeroComponent } from './superhero/components/search-hero/search-hero.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent,
    HeroListComponent,
    SearchHeroComponent,
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
