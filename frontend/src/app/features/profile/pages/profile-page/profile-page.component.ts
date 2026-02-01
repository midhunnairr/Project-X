import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { UserService } from '../../../../core/services/user.service';
import { WallPost, CurrentlyPlaying, Activity } from '../../../../shared/models/game.model';
import { User, Friend } from '../../../../shared/models/user.model';
import { ProfileModule } from '../../profile.module';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { WallPostComponent } from '../../../../shared/components/wall-post/wall-post.component';
import { ActivitySidebarComponent } from '../../../../shared/components/activity-sidebar/activity-sidebar.component';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileModule, ProfileHeaderComponent, SidebarComponent, WallPostComponent, ActivitySidebarComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})

export class ProfilePageComponent implements OnInit {
  user!: User;
  friends: Friend[] = [];
  wallPosts: WallPost[] = [];
  currentlyPlaying: CurrentlyPlaying[] = [];
  recentActivity: Activity[] = [];
  activeFilter: string = 'all';
  postContent: string = '';

  constructor(
    private userService: UserService,
    private gameService: GamesService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadFriends();
    this.loadWallPosts();
    this.loadCurrentlyPlaying();
    this.loadRecentActivity();
  }

  loadUserData(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  loadFriends(): void {
    this.userService.getFriends().subscribe(friends => {
      this.friends = friends;
    });
  }

  loadWallPosts(): void {
    this.gameService.getWallPosts().subscribe(posts => {
      this.wallPosts = posts;
    });
  }

  loadCurrentlyPlaying(): void {
    this.gameService.getCurrentlyPlaying().subscribe(games => {
      this.currentlyPlaying = games;
    });
  }

  loadRecentActivity(): void {
    this.gameService.getRecentActivity().subscribe(activity => {
      this.recentActivity = activity;
    });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    console.log('Filter changed to:', filter);
    // Implement filter logic here
  }

  sharePost(): void {
    if (this.postContent.trim()) {
      console.log('Sharing post:', this.postContent);
      // Implement post sharing logic
      this.postContent = '';
    }
  }

  onLike(postId: string): void {
    this.gameService.likePost(postId).subscribe(() => {
      console.log('Liked post:', postId);
      this.loadWallPosts(); // Reload to show updated likes
    });
  }

  onComment(postId: string): void {
    console.log('Comment on post:', postId);
    // Implement comment logic
  }

  onShare(postId: string): void {
    console.log('Share post:', postId);
    // Implement share logic
  }
}
