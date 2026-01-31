import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [AuthModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Register:', {
      username: this.username,
      email: this.email,
      password: this.password
    });
    // TODO: Add authentication service call
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
