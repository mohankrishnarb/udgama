import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { Menu } from './layouts/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Header,Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('neev');

  isExpanded = signal(true);

  toggleSidebar() {
    this.isExpanded.update(state => !state);
  }

}
