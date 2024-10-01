import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.css'],
})
export class SingUpPageComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;

      this.authService.checkEmailExists(email).subscribe(
        (emailExists) => {
          if (emailExists) {
            this.snackBar.open('El correo ya se registró', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          } else {
            this.authService.registerUser(name, email, password).subscribe(
              () => {
                this.snackBar.open('Usuario registrado', 'Cerrar', {
                  duration: 3000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                });
                this.router.navigate(['/auth/login']);
              },
              (error) => {
                console.error('Error al registrar usuario', error);
                this.snackBar.open('Error al registrar usuario', 'Cerrar', {
                  duration: 3000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                });
              }
            );
          }
        },
        (error) => {
          console.error('Error al verificar usuario', error);
          this.snackBar.open('Error al verificar el correo', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }
      );
    } else {
      this.snackBar.open(
        'Por favor complete el formulario correctamente',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        }
      );
    }
  }
}