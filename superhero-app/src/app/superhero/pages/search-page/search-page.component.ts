import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../../services/superheroes.services';
import { SearchHeroComponent } from '../../components/search-hero/search-hero.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  imports: [CommonModule, SearchHeroComponent]
})
export class SearchPageComponent {
  loading = false;
  error: string | null = null;
  filteredHeros: any[] = [];

  constructor(private heroService: SuperHeroesService) {}

  // Este método se activa cuando el hijo emite el término de búsqueda
  onSearchHero(event: Event) {
    const input = event.target as HTMLInputElement;
    const term = input.value;
    this.loading = true;
    this.error = '';
    
    this.heroService.searchHero(term).subscribe(
      (data) => {
        this.filteredHeros = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error al obtener heroínas. Inténtalo de nuevo más tarde.';
        this.loading = false;
      }
    );
  }
}