import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroes: Hero[] = [];
}