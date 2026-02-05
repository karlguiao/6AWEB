import { Routes } from '@angular/router';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
