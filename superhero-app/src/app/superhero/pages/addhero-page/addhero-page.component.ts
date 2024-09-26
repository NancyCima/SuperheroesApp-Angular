import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatListItem } from '@angular/material/list';
import { SuperHeroesService } from '../../services/superheroes.services';


@Component({
  selector: 'app-addhero-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListItem
  ],
  templateUrl: './addhero-page.component.html',
  styleUrls: ['./addhero-page.component.css']
})
export class AddheroPageComponent implements OnInit {
  heroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private heroesService: SuperHeroesService  // Inyecta el servicio aquí
  ) {
    this.heroForm = this.fb.group({
      superHero: ['', Validators.required],
      alterEgo: ['', Validators.required],
      firstAppearance: ['', Validators.required],
      characters: ['', Validators.required],
      creator: ['', Validators.required],
      altImage: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;      
      
      this.heroesService.addHero(newHero).subscribe(
        (response: any) => {
          console.log('Héroe agregado:', response);
          this.heroForm.reset();           
        },
        (error: any) => {
          console.error('Error al agregar héroe:', error);
        }
      );
    }
  }
}