import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval  } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  // Parameters in Date
  presentDate = new Date();

  // Async Pipes
  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  // Currency Pipes
  price : number = 20000;

  // Slice Pipes
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegrante"];

  // Decimal Pipes
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  // Percent Pipes
  conversionRate: number = 0.875;
  cpuUsage: number = 0.4523;

  // Key Value Pipes
  userProfile: {[key: string]: string | number} = {
    name: 'Karl Christian Guiao',
    age: 28,
    country: 'Philippines',
    occupation: 'Software Engineer'
  };

  settings = new Map<string, string>([
    ['theme', 'dark'],
    ['notifications', 'enabled'],
    ['language', 'English']
  ]);

  // Title Case Pipes
  sampleText: string = 'i am atomic';
  transform(value: string): string { if (!value) return ''; return value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() ); }

  ngOnInit() {}
}
