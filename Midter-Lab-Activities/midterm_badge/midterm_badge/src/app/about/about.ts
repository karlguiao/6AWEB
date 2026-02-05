import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  today = new Date();
}
