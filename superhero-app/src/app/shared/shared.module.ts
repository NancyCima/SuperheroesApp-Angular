import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

@NgModule({
  declarations: [Error404PageComponent, HomePageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
