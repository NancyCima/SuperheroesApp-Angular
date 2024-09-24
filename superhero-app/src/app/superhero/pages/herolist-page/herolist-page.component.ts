import { Component } from '@angular/core';
import { SuperHeroesService } from '../../services/superheroes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interfaces';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-herolist-page',
  templateUrl: './herolist-page.component.html',
  styles: ``,
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
}
