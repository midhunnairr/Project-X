import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Friend, User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User = {
    id: '1',
    name: 'Alex Chen',
    bio: 'Passionate Gamer • RPG Enthusiast • Trophy Hunter',
    location: 'San Francisco, CA',
    favoriteGenres: ['RPG', 'Action-Adventure'],
    gamingSince: '2020-05-01',
    platforms: ['PS5', 'PC', 'Switch'],
    stats: {
      friends: 156,
      gamesPlayed: 347,
      reviews: 289,
      hoursLogged: 2341,
      currentlyPlaying: 5,
      completed: 89,
      achievements: 1456
    }
  };

  private friends: Friend[] = [
    {
      id: '2',
      name: 'Sarah Mitchell',
      status: 'online'
    },
    {
      id: '3',
      name: 'Marcus Lee',
      status: 'playing',
      currentGame: 'Elden Ring'
    },
    {
      id: '4',
      name: 'Jessica Park',
      status: 'offline'
    },
    {
      id: '5',
      name: 'David Zhang',
      status: 'online'
    }
  ];

  constructor() { }

  getCurrentUser(): Observable<User> {
    return of(this.currentUser);
  }

  getFriends(): Observable<Friend[]> {
    return of(this.friends);
  }

  updateUser(user: User): Observable<User> {
    this.currentUser = user;
    return of(this.currentUser);
  }
}
