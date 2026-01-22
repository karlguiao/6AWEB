import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
getEmployees() {
    return [
    {
      id: 100,
      name: 'Karl',
      desc: 'Guiao',
      price: 'kdguiao@hau.edu.ph',
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
    },
    ];
  }
}
