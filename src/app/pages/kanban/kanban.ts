import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AddKanban } from '../add-kanban/add-kanban';
import { KanbanBoard } from '../kanban-board/kanban-board';


@Component({
  selector: 'app-kanban',
  imports: [CommonModule,MatButtonModule,MatInputModule,
    FormsModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule,
    AddKanban,KanbanBoard
  ],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {

}
