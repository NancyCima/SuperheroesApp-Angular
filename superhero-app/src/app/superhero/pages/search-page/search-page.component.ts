import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../../services/superheroes.services';
import { SearchHeroComponent } from '../../components/search-hero/search-hero.component';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  imports: [CommonModule, SearchHeroComponent]
})
export class SearchPageComponent {
  filteredHeros: Hero[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private superheroService: SuperHeroesService) {}

  onSearchHero(term: string) {
    if (term.trim().length === 0) return;

    this.loading = true;
    this.error = null;

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
}