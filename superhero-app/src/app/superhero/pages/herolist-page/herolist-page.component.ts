import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../../services/superheroes.services';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-list-page',
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