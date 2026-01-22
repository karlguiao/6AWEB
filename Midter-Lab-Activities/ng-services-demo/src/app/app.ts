import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [
    {
      id: 100,
      firstname: 'Karl',
      lastname: 'Guiao',
      email: 'kdguiao@hau.edu.ph',
    },
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'kdguiao@hau.edu.ph',
    },
    {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph',
    },
    {
      id: 103,
      firstname: 'John',
      lastname: 'Cena',
      email: 'jcena@hau.edu.ph',
    },
    {
      id: 104,
      firstname: 'Robert',
      lastname: 'Quintana',
      email: 'rquintana@hau.edu.ph',
    }
  ];

  public products: {
    id: string;
    name: string;
    desc: string;
    price: number;
  }[] = [
    {
      id: 'P-101',
      name: 'Logitech Mouse',
      desc: '6 Button Mechanical Mouse',
      price: 899,
    },
    {
      id: 'P-102',
      name: 'JBL BT Speaker',
      desc: 'Waterproof Radio 360 Surround',
      price: 1099,
    },
    {
      id: 'P-103',
      name: 'Mechanical KeyBoard',
      desc: 'Hot-swappable RGB Backlit',
      price: 2395,
    },
    {
      id: 'P-104',
      name: 'Oculus Meta',
      desc: 'All-in-one Gaming Headset',
      price: 22450,
    }
  ];
}
