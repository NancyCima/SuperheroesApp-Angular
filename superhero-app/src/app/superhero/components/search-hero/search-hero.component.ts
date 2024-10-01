import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-hero',
  standalone: true,
  templateUrl: './search-hero.component.html',
  imports: [FormsModule],
})
export class SearchHeroComponent {
  searchTerm: string = '';

  @Output() searchHero = new EventEmitter<string>();

  // Emitir el término de búsqueda hacia el componente padre
  onSearch() {
    this.searchHero.emit(this.searchTerm);
  }
}