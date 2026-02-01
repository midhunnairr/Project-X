import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { FreeGame } from '../../../../shared/models/game.model';

@Component({
  selector: 'app-free-games',
  imports: [],
  templateUrl: './free-games.component.html',
  styleUrl: './free-games.component.css'
})
export class FreeGamesComponent implements OnInit {
  freeGames: FreeGame[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getFreeGames().subscribe(games => {
      this.freeGames = games;
    });
  }
}
