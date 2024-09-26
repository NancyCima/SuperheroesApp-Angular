import { Component } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddHeroComponent } from '../../components/add-hero/add-hero.component';

@Component({
  selector: 'app-addhero-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatToolbarModule,
    AddHeroComponent
  ],
  templateUrl: './addhero-page.component.html',
  styleUrls: ['./addhero-page.component.css']
})
export class AddheroPageComponent {}