import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../pages/users/user-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink,
    RouterModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  user = {
    fullname: '',
    email: '',
    password: ''
  }

  confirmPassword = '';
  isLoading = false;

  signupForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {

    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;

  }

  signup() {
    console.log("Data in Angular before sending:", this.user);

    if (!this.user.fullname || !this.user.email || !this.user.password) {
      alert("Please fill all fields");
      return;
    }

    this.isLoading = true;
    this.userService.createUser(this.user).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error("Backend Error Details:", err.error);
        alert(err.error.message || 'Signup failed');
      }
    });
  }

  onSubmit() {

  }

}
