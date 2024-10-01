import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroes: Hero[] = [];
}