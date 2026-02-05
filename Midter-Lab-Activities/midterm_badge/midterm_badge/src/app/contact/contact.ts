// contact.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name = '';
  email = '';
  message = '';
}
