import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedModule } from '../../feed.module';
import { GamesService } from '../../../../core/services/games.service';
import { TrendingGame } from '../../../../shared/models/game.model';

@Component({
  selector: 'app-trending-carousel',
  imports: [FeedModule],
  templateUrl: './trending-carousel.component.html',
  styleUrl: './trending-carousel.component.css'
})
export class TrendingCarouselComponent implements OnInit, OnDestroy {
  trendingGames: TrendingGame[] = [];
  currentSlide: number = 0;
  private intervalId: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getTrendingGames().subscribe(games => {
      this.trendingGames = games;
    });

    // Auto-advance carousel every 5 seconds
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.trendingGames.length;
  }
}
