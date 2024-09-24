import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home/home-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { NewPageComponent } from './superhero/pages/new-page/new-page.component';
import { SearchPageComponent } from './superhero/pages/search-page/search-page.component';
import { HeroListPageComponent } from './superhero/pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './superhero/pages/addhero-page/addhero-page.component';

const routes: Routes = [

{
  path:'auth',
  loadChildren:()=> import ('./auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'superhero',
  loadChildren:()=> import ('./superhero/superhero.module').then(m=>m.SuperHeroModule)
},{
path:'',
redirectTo:'home',
pathMatch:'full'
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path:'new-hero',
  component: NewPageComponent
},
{
  path:'search',
  component: SearchPageComponent
},
{
  path:'list',
  component: HeroListPageComponent
},
{
  path:':id',
  component: AddheroPageComponent
},
{
  path:'404',
  component: Error404PageComponent
},
{
  path:'**',
  redirectTo:'404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
