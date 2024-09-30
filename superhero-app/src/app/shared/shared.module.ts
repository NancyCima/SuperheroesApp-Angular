import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { AuthModule } from '../auth/auth.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [Error404PageComponent, HomePageComponent, SideNavComponent],
  imports: [CommonModule, AuthModule, AppRoutingModule],
  exports: [SideNavComponent],
})
export class SharedModule {}
