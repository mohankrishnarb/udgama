import { CommonModule,DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, NonNullableFormBuilder, Form, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kanban-card',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule,
            DatePipe
  ],
  templateUrl: './kanban-card.html',
  styleUrl: './kanban-card.scss',
})
export class KanbanCard {

  kanbanCardForm: FormGroup;
   now: Date = new Date();

  constructor(private fb: FormBuilder) {
    this.kanbanCardForm = this.fb.group({
      title: ['Multipurpose landing template'],
      status: ['newtask-02'],
      members: [[]],
      startDate: [new Date()],
      endDate: [new Date()],
      priority: ['high'],
      progress: [50],
      description: ['']
    });
  }

  getInitials(name: string) {
    if (!name || typeof name !== 'string') {
      return '?';
    }
    return name.charAt(0).toUpperCase();
  }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
