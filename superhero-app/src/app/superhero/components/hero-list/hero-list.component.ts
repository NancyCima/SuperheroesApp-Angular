import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [MatCardModule, MatList, MatListItem, CommonModule],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroes: Hero[] = [];
}