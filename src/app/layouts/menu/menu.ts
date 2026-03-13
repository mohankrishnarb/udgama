import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  isExpanded = input<boolean>(true);

}
