import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css'],
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  // Form fields
  username = '';
  email = '';
  password = '';
  role: string | null = null;
  gender: string | null = null;
  status: string | null = null;
  comments = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Form Submitted!');
    console.log({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments,
    });
  }
}
