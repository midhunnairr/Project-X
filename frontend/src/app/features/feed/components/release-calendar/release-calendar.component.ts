import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../core/services/games.service';
import { ReleaseCalendarItem } from '../../../../shared/models/game.model';
import { FeedModule } from '../../feed.module';

@Component({
  selector: 'app-release-calendar',
  imports: [FeedModule],
  templateUrl: './release-calendar.component.html',
  styleUrl: './release-calendar.component.css'
})
export class ReleaseCalendarComponent implements OnInit {
  releases: ReleaseCalendarItem[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getReleaseCalendar().subscribe(releases => {
      this.releases = releases;
    });
  }
}
