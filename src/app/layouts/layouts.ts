import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  imports: [FormsModule,ReactiveFormsModule,MatSidenavModule,
            MatListModule,MatIconModule,MatExpansionModule,
            MatButtonModule,RouterModule,RouterOutlet
  ],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
})
export class Layouts {

}
