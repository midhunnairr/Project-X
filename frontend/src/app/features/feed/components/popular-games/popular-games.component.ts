import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { Game } from '../../../../shared/models/game.model';
import { FeedModule } from '../../feed.module';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-popular-games',
  imports: [FeedModule, GameCardComponent],
  templateUrl: './popular-games.component.html',
  styleUrl: './popular-games.component.css'
})
export class PopularGamesComponent implements OnInit {
  popularGames: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getPopularGames().subscribe(games => {
      this.popularGames = games;
    });
  }
}
