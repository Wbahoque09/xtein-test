import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/home_route').then(m => m.homeRoute)
  }
];
