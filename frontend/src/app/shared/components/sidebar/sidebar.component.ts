import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { User, Friend } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() user!: User;
  @Input() friends: Friend[] = [];

  getGradient(index: number): string {
    const gradients = [
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    ];
    return gradients[index % gradients.length];
  }
}
