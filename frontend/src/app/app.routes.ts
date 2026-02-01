import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { ManageGamesComponent } from './features/admin/pages/manage-games/manage-games.component';
import { ManageUsersComponent } from './features/admin/pages/manage-users/manage-users.component';
import { ReportsComponent } from './features/admin/pages/reports/reports.component';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { ProfilePageComponent } from './features/profile/pages/profile-page/profile-page.component';
import { HomeComponent } from './features/feed/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/manage-games', component: ManageGamesComponent },
  { path: 'admin/manage-users', component: ManageUsersComponent },
  { path: 'admin/reports', component: ReportsComponent },

  { path: '**', redirectTo: '' },
];
