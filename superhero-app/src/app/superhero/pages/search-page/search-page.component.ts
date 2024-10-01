import { Component } from '@angular/core';
import { SuperHeroesService } from '../../services/superheroes.services';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  filteredHeros: Hero[] = [];
  loading: boolean = true;
  error: string | null = null;
  selectedHeroine: Hero | null = null; 

  constructor(private superheroService: SuperHeroesService) {}

  onSearchHero(term: string) {
    if (term.trim().length === 0) return;

    this.loading = true;
    this.error = null;
    this.selectedHeroine = null;

    this.superheroService.searchHero(term).subscribe({
      next: (heroes) => {
        this.filteredHeros = heroes;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al buscar heroínas';
        this.loading = false;
      }
    });
  }
  onHeroClick(hero: Hero) {
    this.selectedHeroine = hero;
  }
}