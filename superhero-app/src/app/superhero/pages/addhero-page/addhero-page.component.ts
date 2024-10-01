import { Component } from '@angular/core';
import { AddHeroComponent } from '../../components/add-hero/add-hero.component';

@Component({
  selector: 'app-addhero-page',
  standalone: true,
  imports: [
    AddHeroComponent
  ],
  templateUrl: './addhero-page.component.html',
  styleUrls: ['./addhero-page.component.css']
})
export class AddheroPageComponent {}