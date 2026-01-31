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
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Login:', { email: this.email, password: this.password });
    // TODO: Add authentication service call
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
