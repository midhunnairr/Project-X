import { Component, Input } from '@angular/core';
import { CurrentlyPlaying, Activity } from '../../models/game.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-activity-sidebar',
  imports: [SharedModule],
  templateUrl: './activity-sidebar.component.html',
  styleUrl: './activity-sidebar.component.css'
})
export class ActivitySidebarComponent {
  @Input() currentlyPlaying: CurrentlyPlaying[] = [];
  @Input() recentActivity: Activity[] = [];

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) {
      return 'Just now';
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  }
}
