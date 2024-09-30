import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-hero',
  standalone: true,
  templateUrl: './search-hero.component.html',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
})
export class SearchHeroComponent {
  searchTerm: string = '';

  @Output() searchHero = new EventEmitter<string>();

  // Emitir el término de búsqueda hacia el componente padre
  onSearch() {
    this.searchHero.emit(this.searchTerm);
  }
}