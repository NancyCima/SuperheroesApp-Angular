import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { AuthModule } from '../auth/auth.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [Error404PageComponent, HomePageComponent, NavBarComponent],
  imports: [CommonModule, AuthModule],
  exports: [NavBarComponent]
})
export class SharedModule {}
