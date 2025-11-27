import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Karl Christian Guiao"
  score = 95;

  // Property Binding
  imageURL = "https://avatars.githubusercontent.com/u/174184661?v=4";
  isDisabled = true;

  // Attribute Binding
  colSpanValue = 3;

  // Class Binding
  isPassing = true;

  // Style Binding
  boxColor = "purple";
  boxSize = "150px";
}
