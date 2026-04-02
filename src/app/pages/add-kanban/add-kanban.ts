import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';

interface Status{
  value: string;
  viewValue: string;
}

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'dd/MM/yyyy',
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-kanban',
  imports: [CommonModule, FormsModule,ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule,MatSelectModule,MatDatepickerModule,
  ],
  providers: [provideLuxonDateAdapter(),{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  templateUrl: './add-kanban.html',
  styleUrl: './add-kanban.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddKanban {

  members = new FormControl('');
  memberList :string[]= ['Ranger','Krishna','Mohan','Chandra','Bala','Meg'];

  priorities = new FormControl('');
  priorityList : string[] = ['Low','Medium','High'];

  status: Status [] = [
    {value:'select-01', viewValue:'Select-Status'},
    {value:'upcoming-02', viewValue:'UpComming'},
    {value:'inprogress-03', viewValue:'InProgress'},
    {value:'inreview-04', viewValue:'InReview'},
    {value:'onhold-05',viewValue:'OnHold'},
    {value:'completed-06', viewValue:'Completed'}
  ]

}
