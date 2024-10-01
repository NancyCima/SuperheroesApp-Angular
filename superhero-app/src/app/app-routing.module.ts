import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home/home-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { SingUpPageComponent } from './auth/pages/sing-up-page/sing-up-page.component';
import { SearchPageComponent } from './superhero/pages/search-page/search-page.component';
import { HeroListPageComponent } from './superhero/pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './superhero/pages/addhero-page/addhero-page.component';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SingUpPageComponent },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'list', component: HeroListPageComponent },
      { path: 'add', component: AddheroPageComponent },
    ],
  },
  {
    path: 'signup',
    component: SingUpPageComponent,
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
   { path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
