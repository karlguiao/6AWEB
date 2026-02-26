import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
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
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatSlideToggleModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  userName = '';
  email = '';
  password = '';
  gender = '';
  birthDate!: Date;
  address = '';
  angularSkillLevel = 5;
  country = '';
  submitted = false;
  isDarkMode = false;

  minSkillLevel = 1;
  maxSkillLevel = 10;
  countries: string[] = ['USA', 'Canada', 'India', 'Australia', 'UK'];

  // Custom Validator for year <= 2006
  birthYearValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const date = new Date(control.value);
      return date.getFullYear() <= 2006 ? null : { tooYoung: true };
    };
  }

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
    ]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, this.birthYearValidator()]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country: new FormControl('', [Validators.required]),
    agreeTerms: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private snackBar: MatSnackBar) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onReset() {
    this.formdata.reset({
      angularSkillLevel: 5,
      agreeTerms: false
    });
    this.submitted = false;
    this.snackBar.open('Form Reset', 'Close', { duration: 2000 });
  }

  onClickSubmit() {
    if (this.formdata.valid) {
      const data = this.formdata.value;
      this.submitted = true;
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.address = data.address;
      this.angularSkillLevel = data.angularSkillLevel;
      this.birthDate = data.birthDate;
      this.country = data.country;

      this.snackBar.open('Registration Successful!', 'OK', { duration: 3000 });
    }
  }
}
