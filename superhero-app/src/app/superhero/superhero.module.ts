import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HerolistPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SearchPageComponent,
        HerolistPageComponent,
        AddheroPageComponent
    ],
    imports:[
        CommonModule,
        SharedModule
    ]
})

export class SuperHeroModule {}