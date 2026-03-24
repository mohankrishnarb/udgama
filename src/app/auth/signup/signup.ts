import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,ReactiveFormsModule, RouterLink,RouterModule,MatInputModule,
            MatFormFieldModule,MatButtonModule,MatIconModule
          ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  signupForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder){

this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
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



  signup(){
    // this.router.navigate(['/dashboard']);
    console.log(this.signupForm.value);
    
  }

  onSubmit(){

  }

}
