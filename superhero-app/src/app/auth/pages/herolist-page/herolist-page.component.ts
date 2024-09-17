import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-herolist-page',
  templateUrl: './herolist-page.component.html'
  //styleUrls: ['./herolist-page.component.css']
})
export class HerolistPageComponent implements OnInit {
  heroes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/datos.json').subscribe(
      (data) => this.heroes = data,
      (error) => console.error('Error loading file:', error)
    );
  }
}
