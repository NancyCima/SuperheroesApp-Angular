import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    SingUpPageComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [LoginPageComponent, MaterialModule]
})
export class AuthModule {}
