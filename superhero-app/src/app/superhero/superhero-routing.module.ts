import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
    {
        path: 'list',
        component: HeroListPageComponent
    },
    {
        path: 'add',
        component: AddheroPageComponent
    },
    {
        path: 'search',
        component: SearchPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroRoutingModule { }
