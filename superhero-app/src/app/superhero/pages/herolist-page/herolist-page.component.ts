import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../../services/superheroes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interfaces';
import { delay, switchMap } from 'rxjs';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-herolist-page',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatSpinner,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatList,
    MatListItem,
    MatButton,
    CommonModule
  ],
  templateUrl: './herolist-page.component.html',
  styleUrls: ['./herolist-page.component.css']
})

export class HeroListPageComponent {
  hero?: Hero;

  constructor(
    public superheroservices: SuperHeroesService,
    public activateRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        delay(3000),
        switchMap(({ id }) => this.superheroservices.getHeroById(id))
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['heroes/list']);
        this.hero = hero;
        console.log({ hero });
        return;
      });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
