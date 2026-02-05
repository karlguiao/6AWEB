import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/home" routerLinkActive="active-link">Home</a>
      <a routerLink="/about" routerLinkActive="active-link">About</a>
      <a routerLink="/services" routerLinkActive="active-link">Services</a>
      <a routerLink="/contact" routerLinkActive="active-link">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {}
