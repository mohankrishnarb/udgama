import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [

  {
    path: 'auth',
    children: [
      { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
      { path: 'signup', loadComponent: () => import('./auth/signup/signup').then(m => m.Signup) },
      { path: 'reset-password', loadComponent: () => import('./auth/reset-password/reset-password').then(m => m.ResetPassword) }
    ]
  },
  {
    path: '',
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'users', loadComponent: () => import('./pages/users/users').then(m => m.Users) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings').then(m => m.Settings) },
      { path: 'drive', loadComponent: () => import('./pages/drive/drive').then(m => m.Drive) },
      { path: 'kanban', loadComponent: () => import('./pages/kanban/kanban').then( m => m.Kanban) },
      { path: 'notes', loadComponent: () => import('./pages/notes/notes').then(m => m.Notes) },
      { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.Profile) },
      { path: 'todo', loadComponent: () => import('./pages/todo/todo').then(m => m.Todo) },
    ]
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' }
    
];
