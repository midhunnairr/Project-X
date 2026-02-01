import { Component } from '@angular/core';
import { FeedModule } from '../../feed.module';
import { FreeGamesComponent } from '../../components/free-games/free-games.component';
import { PopularGamesComponent } from '../../components/popular-games/popular-games.component';
import { TrendingCarouselComponent } from '../../components/trending-carousel/trending-carousel.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { ReleaseCalendarComponent } from '../../components/release-calendar/release-calendar.component';

@Component({
  selector: 'app-home',
  imports: [FeedModule, TrendingCarouselComponent, PopularGamesComponent, FreeGamesComponent, SidebarComponent, RightSidebarComponent, ReleaseCalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
