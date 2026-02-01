import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AuthModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  // Login form data
  loginData = {
    email: '',
    password: ''
  };

  // Signup form data
  signupData = {
    username: '',
    email: '',
    reEmail: '',
    password: '',
    month: '',
    day: '',
    year: '',
    gender: ''
  };

  // Dropdown options
  months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  days: number[] = [];
  years: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // Generate days (1-31)
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    // Generate years (1905-2010)
    const currentYear = 2010;
    for (let i = currentYear; i >= 1905; i--) {
      this.years.push(i);
    }
  }

  onLogin(): void {
    console.log('Login attempt:', this.loginData);

    // Add your login logic here
    if (this.loginData.email && this.loginData.password) {
      alert(`Login attempt with email: ${this.loginData.email}`);
      // In a real application, you would call an authentication service here
    } else {
      alert('Please fill in all fields');
    }
  }

  onSignup(): void {
    console.log('Signup attempt:', this.signupData);

    // Basic validation
    if (!this.signupData.username) {
      alert('Please enter your username');
      return;
    }

    if (!this.signupData.email) {
      alert('Please enter your email');
      return;
    }

    if (!this.signupData.password) {
      alert('Please enter a password');
      return;
    }

    if (!this.signupData.month || !this.signupData.day || !this.signupData.year) {
      alert('Please select your birthday');
      return;
    }

    if (!this.signupData.gender) {
      alert('Please select your gender');
      return;
    }

    alert(`Signup successful! Welcome ${this.signupData.username}`);
    // In a real application, you would call a registration service here
  }
}

