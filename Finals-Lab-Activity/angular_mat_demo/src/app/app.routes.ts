import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Register1 } from './register1/register1';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'register1', component: Register1 }
];
