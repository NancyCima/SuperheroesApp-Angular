import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interfaces';
import { enviroments } from '../../../enviroments/enviroment';

@Injectable({ providedIn: 'root' })
export class SuperHeroesService {
  constructor(private htpp: HttpClient) {}

  baserUrl: string = enviroments.baseUrl;

  getHeroes(): Observable<Hero[]> {
    return this.htpp.get<Hero[]>(`${this.baserUrl}/heroes`);
    //http://localhost:3000/heroes
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.htpp
      .get<Hero>(`${this.baserUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
}
