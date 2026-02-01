import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WallPost } from '../../models/game.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-wall-post',
  imports: [SharedModule],
  templateUrl: './wall-post.component.html',
  styleUrl: './wall-post.component.css'
})
export class WallPostComponent {
  @Input() post!: WallPost;
  @Output() like = new EventEmitter<string>();
  @Output() comment = new EventEmitter<string>();
  @Output() share = new EventEmitter<string>();

  onLike(): void {
    this.like.emit(this.post.id);
  }

  onComment(): void {
    this.comment.emit(this.post.id);
  }

  onShare(): void {
    this.share.emit(this.post.id);
  }

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

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}
