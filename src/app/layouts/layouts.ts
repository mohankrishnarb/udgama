import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet,CommonModule,Header,Menu],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
})
export class Layouts {

  isExpanded = signal(true);

  toggleSidebar() {
    this.isExpanded.update(val => !val);
  }

}
