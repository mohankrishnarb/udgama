import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { Menu } from './layouts/menu/menu';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('udgama');

  isExpanded = signal(true);

  toggleSidebar() {
    this.isExpanded.update(state => !state);
  }

}
