import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private heroesService: SuperHeroesService,
    private snackBar: MatSnackBar
  ) {
    this.heroForm = this.fb.group({
      superhero: ['', Validators.required],
      publisher: ['', Validators.required],
      alter_ego: ['', Validators.required],
      first_appearance: ['', Validators.required],
      characters: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;

      this.heroesService.addHero(newHero).subscribe(
        (response: any) => {
          this.snackBar.open('Heroína agregada exitosamente', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.heroForm.reset();
          this.router.navigate(['/home/list']);
        },
        (error: any) => {
          this.snackBar.open('Error al agregar heroína', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
      );
    }
  }
}
