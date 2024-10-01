import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../../services/superheroes.services';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-addhero',
  encapsulation: ViewEncapsulation.None,
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
