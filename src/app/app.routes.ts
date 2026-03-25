import { Routes } from '@angular/router';
import { Layouts } from './layouts/layouts';

export const routes: Routes = [

  /* auth routes */

  { path:'', loadChildren:() => import('./auth/auth.routes').then( m => m.auth_routes) },

  /* auth routes */

  /* pages routes */

  { path:'', component: Layouts, loadChildren:() => import('./pages/pages.routes').then( m => m.pages_routes) }

  /* pages routes */
  
];
