import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo.component/data-binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, DataBindingDemoComponent]
})
export class App {
  protected readonly title = signal('prelim_lab_data_binding');
}
