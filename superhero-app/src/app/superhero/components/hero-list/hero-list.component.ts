import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroes: any[] = []; // Recibe los héroes desde herolist-page
}
