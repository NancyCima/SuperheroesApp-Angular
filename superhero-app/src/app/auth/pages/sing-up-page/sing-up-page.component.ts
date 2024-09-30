import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrl: './sing-up-page.component.css'
})
export class SingUpPageComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ){
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator}
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
    ? null
    : { mismatch: true};
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password} = this.registerForm.value;

      this.authService.checkEmailExists(email).subscribe(
        (emailExists) => {
          if (emailExists) {
            alert('El correo ya se registro ')
          } else {
            this.authService.registerUser(name, email, password).subscribe(
              () => {
                alert('usuario registrado');
                this.router.navigate(['/auth/login']);
              },
              (error) => {
                console.error('error');
                alert('error')
              }
            );
          }
        },
        (error) => {
          console.error('Error al verificar usuario', error);
        }
      );
    }
  }  

}
