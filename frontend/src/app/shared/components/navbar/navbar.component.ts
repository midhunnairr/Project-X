import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn: boolean = false;

  // Login form data
  loginData = {
    email: '',
    password: ''
  };

  searchQuery: string = '';

  notificationCount: number = 3;
  friendRequestCount: number = 2;

  showAccountMenu: boolean = false;

  currentUser: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const userSession = localStorage.getItem('currentUser');
    if (userSession) {
      this.currentUser = JSON.parse(userSession);
      this.isLoggedIn = true;
    }
  }

  onLogin(): void {
    console.log('Login attempt:', this.loginData);

    // Validation
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter both email and password');
      return;
    }

    this.authenticateUser(this.loginData.email, this.loginData.password);
  }

  authenticateUser(email: string, password: string): void {

    this.currentUser = {
      id: 1,
      email: email,
      name: 'John Doe',
      profilePicture: null
    };

    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    this.isLoggedIn = true;
    this.loginData = { email: '', password: '' };
    this.router.navigate(['/profile']);
    console.log('Login successful!', this.currentUser);
  }

  onLogout(): void {
    localStorage.removeItem('currentUser');

    this.isLoggedIn = false;
    this.currentUser = null;
    this.showAccountMenu = false;

    this.router.navigate(['/']);

    console.log('Logged out successfully');
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    alert('Password recovery feature coming soon!');
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  onNotificationClick(): void {
    console.log('Notifications clicked');
    this.router.navigate(['/notifications']);
  }

  onFriendRequestsClick(): void {
    console.log('Friend requests clicked');
    this.router.navigate(['/friends/requests']);
  }

  toggleAccountMenu(): void {
    this.showAccountMenu = !this.showAccountMenu;
  }

  onViewProfile(): void {
    this.showAccountMenu = false;
    this.router.navigate(['/profile']);
  }

  onSettings(): void {
    this.showAccountMenu = false;
    this.router.navigate(['/settings']);
  }

  closeAccountMenu(): void {
    this.showAccountMenu = false;
  }
}
