import { Component, Input } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
 @Input() user!: User;

  activeTab: string = 'wall';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    console.log('Active tab:', tab);
  }
}
