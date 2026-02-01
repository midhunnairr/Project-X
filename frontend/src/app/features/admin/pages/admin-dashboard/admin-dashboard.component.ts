import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StatsGridComponent } from '../../components/stats-grid/stats-grid.component';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { DataStoreService } from '../../../../core/services/datastore.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [StatsGridComponent, UserTableComponent, AsyncPipe],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  // users$;

  stats = [
    { title: 'Users', value: 1240, change: '+20 today', negative: false },
    { title: 'Games', value: 85, change: '+3 today', negative: false }
  ];
  users = [
    {
      id: '1',
      name: 'Alice',
      bio: 'Pro gamer and streamer',
      location: 'USA',
      favoriteGenres: ['RPG', 'Action'],
      gamingSince: '2020-05-01',
      platforms: ['PC', 'PS5'],
      profilePicture: 'https://example.com/alice.jpg',
      coverPhoto: 'https://example.com/alice-cover.jpg',
      stats: {
        friends: 45,
        gamesPlayed: 120,
        reviews: 10,
        hoursLogged: 350,
        currentlyPlaying: 2,
        completed: 50,
        achievements: 15
      }
    },
    {
      id: '2',
      name: 'Bob',
      bio: 'Casual gamer',
      location: 'UK',
      favoriteGenres: ['FPS', 'Strategy'],
      gamingSince: '2019-03-12',
      platforms: ['Xbox', 'PC'],
      profilePicture: 'https://example.com/bob.jpg',
      coverPhoto: 'https://example.com/bob-cover.jpg',
      stats: {
        friends: 20,
        gamesPlayed: 85,
        reviews: 5,
        hoursLogged: 200,
        currentlyPlaying: 1,
        completed: 30,
        achievements: 8
      }
    },
    {
      id: '3',
      name: 'Charlie',
      bio: 'Competitive eSports player',
      location: 'Canada',
      favoriteGenres: ['MOBA', 'Fighting'],
      gamingSince: '2018-07-22',
      platforms: ['PC', 'Switch'],
      stats: {
        friends: 60,
        gamesPlayed: 200,
        reviews: 25,
        hoursLogged: 500,
        currentlyPlaying: 3,
        completed: 90,
        achievements: 40
      }
    }
  ];


  // constructor(private store: DataStoreService) {
  //   this.users$ = this.store.users$;
  // }
}
