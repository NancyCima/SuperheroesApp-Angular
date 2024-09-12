import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HerolistPageComponent } from './pages/herolist-page/herolist-page.component';
import { AddheroPageComponent } from './pages/addhero-page/addhero-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    HerolistPageComponent,
    AddheroPageComponent,
    LoginPageComponent,
    SingUpPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    SearchPageComponent,
    HerolistPageComponent,
    AddheroPageComponent,
    LoginPageComponent,
    SingUpPageComponent
  ],
})
export class SuperHeroModule {}