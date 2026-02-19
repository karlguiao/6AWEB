import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-demo.html',
  styleUrls: ['./custom-demo.css']
})
export class CustomDemo{
  ghibliFilms = [
    'Spirited Away',
    'My Neighbor Totoro',
    'Princess Mononoke',
    'Howl\'s Moving Castle',
    'Kiki\'s Delivery Service'
  ];

  form!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      favoriteFilm: ['', Validators.required],
      favoriteCharacter: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      recommend: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submittedData = this.form.value;
      console.log(this.submittedData);
    }
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.touched && control?.invalid;
  }
}
