import { Component } from '@angular/core';
import { KanbanCard } from '../kanban-card/kanban-card';

@Component({
  selector: 'app-kanban-board',
  imports: [KanbanCard],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard {

}
