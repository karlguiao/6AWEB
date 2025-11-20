import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})

export class DataBindingDemoComponent {
  message: string = 'Data Binding Demonstration';

  imageURL = '../assets/logo-angular.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';

  textColor: string = 'blue';

  isHighlighted: boolean = true;

  yourName: string = '';

  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
