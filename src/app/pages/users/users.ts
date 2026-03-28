import { Component, OnInit, inject, ViewChild, AfterViewInit} from '@angular/core';
import { UserService, User  } from '../users/user-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface UserData {
  _id: string;
  fullname: string;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  {_id: '1', fullname: 'John Doe', email: 'john@udgama.com'},
  {_id: '2', fullname: 'Jane Smith', email: 'jane@example.com'},
  // Add more mock data here
];

@Component({
  selector: 'app-users',
  imports: [CommonModule,MatButtonModule,MatIconModule, 
            MatCardModule, MatTableModule, MatPaginatorModule, 
            MatSortModule,MatFormFieldModule, MatInputModule
          ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  constructor(private userService:UserService){}

  users: any[] = [];
  isLoading = true;

  displayedColumns: string[] = ['_id', 'name', 'email'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

ngOnInit(): void {
  this.userService.getUsers().subscribe({
    next: (data) => {
      this.users = data;
      // Update the table's data source here!
      this.dataSource.data = data; 
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error fetching users:', err);
      this.isLoading = false;
    }
  });
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error('Failed to load users', err)
    });
    console.log(this.userService.getUsers.name);
    
  }

}
