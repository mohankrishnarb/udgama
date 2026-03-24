import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,RouterLink,MatInputModule,
            MatFormFieldModule,MatButtonModule,MatIconModule
          ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

}
