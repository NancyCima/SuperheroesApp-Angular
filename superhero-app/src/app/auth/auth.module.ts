import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { HeroListPageComponent } from './pages/herolist-page/herolist-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddheroPageComponent,
    HeroListPageComponent,
    LayoutPageComponent,
    LoginPageComponent,
    SearchPageComponent,
    SingUpPageComponent
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule, RouterModule],
})
export class AuthModule {}
