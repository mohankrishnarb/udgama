import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [RouterModule,RouterLink,FormsModule,ReactiveFormsModule,MatIconModule,
            MatFormFieldModule,MatInputModule,MatButtonModule,RouterLink
          ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router:Router){}

  login(){
    this.router.navigate(['/dashboard']);
  }

}
