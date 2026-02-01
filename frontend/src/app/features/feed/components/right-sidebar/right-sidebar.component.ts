import { Component, OnDestroy, OnInit } from '@angular/core';
import { FriendActivity, Ad } from '../../../../shared/models/game.model';
import { GamesService } from '../../../../core/services/games.service';

@Component({
  selector: 'app-right-sidebar',
  imports: [],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent implements OnInit, OnDestroy {
  friendsActivity: FriendActivity[] = [];
  ads: Ad[] = [];
  countdown: string = '';
  private intervalId: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getFriendsActivity().subscribe(activities => {
      this.friendsActivity = activities;
    });

    this.gamesService.getAds().subscribe(ads => {
      this.ads = ads;
    });

    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateCountdown(): void {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);

    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.countdown = `Ends in ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
