import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserService } from '../../pages/users/user-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, RouterLink, FormsModule, ReactiveFormsModule, MatIconModule,
            MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  isLoading = false;

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService:UserService) { 
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.userService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        // Save user info or token
        localStorage.setItem('token', 'udgama_token'); 
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        alert(err.error.message || 'Login failed');
      }
    });
    console.log(this.loginForm.value);    
  }

}
