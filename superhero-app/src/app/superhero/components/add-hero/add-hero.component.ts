import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../../services/superheroes.services';

@Component({
  selector: 'app-addhero',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  heroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private heroesService: SuperHeroesService
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
          console.log('Heroína agregada:', response);
          this.heroForm.reset();
          this.router.navigate(['/list']);
        },
        (error: any) => {
          console.error('Error al agregar heroína:', error);
        }
      );
    }
  }
}
