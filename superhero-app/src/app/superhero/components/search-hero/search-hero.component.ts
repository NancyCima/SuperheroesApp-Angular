import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
})
export class SearchHeroComponent {
  searchTerm: string = '';

  @Output() searchHero = new EventEmitter<string>();

  onSearch() {
    this.searchHero.emit(this.searchTerm);
  }
}