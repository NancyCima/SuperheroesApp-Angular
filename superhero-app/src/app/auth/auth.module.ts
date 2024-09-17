import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import {AddheroPageComponent} from './pages/addhero-page/addhero-page.component'
import {HerolistPageComponent} from './pages/herolist-page/herolist-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {SingUpPageComponent} from './pages/sing-up-page/sing-up-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [AddheroPageComponent, HerolistPageComponent, LoginPageComponent, SearchPageComponent, SingUpPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
