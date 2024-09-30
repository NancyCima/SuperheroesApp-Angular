import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../../services/superheroes.services';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroListComponent } from '../../components/hero-list/hero-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-hero-list-page',
  standalone: true,
  imports: [
    HeroListComponent,
    MatGridListModule,
    MatCardModule,
    MatSpinner,
    CommonModule,
  ],
  templateUrl: './herolist-page.component.html',
  styleUrls: ['./herolist-page.component.css']
})
export class HeroListPageComponent implements OnInit {
  heroes: Hero[] = [];
  loading: boolean = true;

  constructor(
    private heroServices: SuperHeroesService,
  ) {}

  ngOnInit(): void {
    this.heroServices.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}