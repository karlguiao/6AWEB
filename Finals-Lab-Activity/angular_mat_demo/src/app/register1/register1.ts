import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // Removed Validators & ValidatorFn
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Keep the same Material imports so the UI looks identical
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-register1',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSliderModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatTooltipModule, MatIconModule,
    ReactiveFormsModule, FormsModule, MatSnackBarModule, MatSlideToggleModule
  ],
  templateUrl: './register1.html',
  styleUrls: ['./register1.css'] // Reusing your existing CSS file
})
export class Register1 {
  submitted = false;
  isDarkMode = false;
  countries: string[] = ['USA', 'Canada', 'India', 'Australia', 'UK'];

  // Form group with NO VALIDATORS
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    birthDate: new FormControl(null),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country: new FormControl(''),
    agreeTerms: new FormControl(false)
  });

  constructor(private snackBar: MatSnackBar) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onReset() {
    this.formdata.reset({ angularSkillLevel: 5, agreeTerms: false });
    this.submitted = false;
  }

  onClickSubmit() {
    // This will always run because we aren't checking for this.formdata.valid
    this.submitted = true;
    this.snackBar.open('Submitted (No Validation Check)!', 'OK', { duration: 3000 });
  }
}
