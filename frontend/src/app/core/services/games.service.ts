import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WallPost, CurrentlyPlaying, Activity, Ad, FreeGame, FriendActivity, Game, ReleaseCalendarItem, TrendingGame } from '../../shared/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private wallPosts: WallPost[] = [
    {
      id: '1',
      userId: '1',
      userName: 'Alex Chen',
      content: 'Just finished my playthrough of this masterpiece! Here\'s my review:',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      type: 'review',
      review: {
        id: 'r1',
        game: {
          id: 'g1',
          title: 'Baldur\'s Gate 3',
          developer: 'Larian Studios',
          year: 2023,
          platforms: ['PC', 'PS5', 'XBOX'],
          genres: ['RPG']
        },
        userId: '1',
        userName: 'Alex Chen',
        rating: 5,
        reviewText: 'An absolute triumph of RPG design. The depth of choice, the writing, the tactical combat - everything comes together perfectly. Spent 120 hours on my first playthrough and already planning my second. Every decision matters, every companion has a compelling story, and the freedom to approach situations in countless ways is incredible. A must-play for any RPG fan.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        likes: 23,
        comments: 8
      },
      likes: 23,
      comments: 8
    },
    {
      id: '2',
      userId: '2',
      userName: 'Sarah Mitchell',
      content: 'Alex Chen and Marcus Lee are now gaming friends!',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      type: 'friend',
      likes: 12,
      comments: 2
    },
    {
      id: '3',
      userId: '1',
      userName: 'Alex Chen',
      content: 'Added 3 games to wishlist: Hollow Knight: Silksong, Final Fantasy XVI, and Starfield',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
      type: 'status',
      likes: 7,
      comments: 3
    },
    {
      id: '4',
      userId: '1',
      userName: 'Alex Chen',
      content: 'Finally got the platinum trophy for Elden Ring! 180 hours well spent 🏆',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      type: 'review',
      review: {
        id: 'r2',
        game: {
          id: 'g2',
          title: 'Elden Ring',
          developer: 'FromSoftware',
          year: 2022,
          platforms: ['PC', 'PS5', 'XBOX'],
          genres: ['Action RPG']
        },
        userId: '1',
        userName: 'Alex Chen',
        rating: 5,
        reviewText: 'FromSoftware\'s magnum opus. The open world breathes new life into the Souls formula. Every corner hides secrets, every boss is a memorable encounter. The freedom to tackle challenges in any order is liberating. Challenging but fair - exactly what I want from a Souls game.',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        likes: 45,
        comments: 15
      },
      likes: 45,
      comments: 15
    }
  ];

  private currentlyPlaying: CurrentlyPlaying[] = [
    {
      game: {
        id: 'g3',
        title: 'Persona 5 Royal',
        developer: 'Atlus',
        year: 2019,
        platforms: ['PS5', 'PC', 'Switch'],
        genres: ['JRPG']
      },
      hoursPlayed: 45,
      progress: 60
    },
    {
      game: {
        id: 'g4',
        title: 'Hades',
        developer: 'Supergiant Games',
        year: 2020,
        platforms: ['PC', 'Switch', 'PS5'],
        genres: ['Roguelike']
      },
      hoursPlayed: 23,
      progress: 35
    }
  ];

  private recentActivity: Activity[] = [
    {
      id: 'a1',
      type: 'review',
      userId: '2',
      userName: 'Sarah Mitchell',
      game: {
        id: 'g5',
        title: 'The Last of Us Part II',
        developer: 'Naughty Dog',
        year: 2020,
        platforms: ['PS5'],
        genres: ['Action-Adventure']
      },
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      description: 'reviewed The Last of Us Part II'
    },
    {
      id: 'a2',
      type: 'completed',
      userId: '3',
      userName: 'Marcus Lee',
      game: {
        id: 'g6',
        title: 'God of War Ragnarök',
        developer: 'Santa Monica Studio',
        year: 2022,
        platforms: ['PS5'],
        genres: ['Action-Adventure']
      },
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      description: 'completed God of War Ragnarök'
    },
    {
      id: 'a3',
      type: 'started',
      userId: '4',
      userName: 'Jessica Park',
      game: {
        id: 'g7',
        title: 'Stray',
        developer: 'BlueTwelve Studio',
        year: 2022,
        platforms: ['PS5', 'PC'],
        genres: ['Adventure']
      },
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      description: 'started playing Stray'
    },
    {
      id: 'a4',
      type: 'wishlist',
      userId: '5',
      userName: 'David Zhang',
      game: {
        id: 'g8',
        title: 'Hollow Knight',
        developer: 'Team Cherry',
        year: 2017,
        platforms: ['PC', 'Switch'],
        genres: ['Metroidvania']
      },
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      description: 'added Hollow Knight to wishlist'
    }
  ];

  getTrendingGames(): Observable<TrendingGame[]> {
    const games: TrendingGame[] = [
      {
        id: '1',
        title: 'Cyber Knights: Neon City',
        description: 'Tactical RPG in cyberpunk world',
        fullDescription: 'Immerse yourself in a cyberpunk world where choices matter. Lead your team of mercenaries through the neon-lit streets of Neo Tokyo in this tactical RPG adventure. Features stunning visuals and deep character customization.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      {
        id: '2',
        title: 'Velocity Racing Ultimate',
        description: 'High-speed racing simulator',
        fullDescription: 'Experience the thrill of high-speed racing in the most realistic racing simulator ever created. Race across 50+ tracks worldwide with over 200 licensed vehicles. Online multiplayer supports up to 24 players.',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        id: '3',
        title: 'Legends of Eldoria',
        description: 'Epic fantasy open-world RPG',
        fullDescription: 'Embark on an epic fantasy journey in this open-world RPG. Battle mythical creatures, forge legendary weapons, and uncover the secrets of an ancient civilization. Over 100 hours of gameplay awaits.',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      }
    ];
    return of(games);
  }

  getPopularGames(): Observable<Game[]> {
    const games: Game[] = [
      {
        id: '4',
        title: 'Sniper Elite: Shadow Ops',
        description: 'Tactical stealth action in WWII',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        releaseDate: 'Jan 15, 2026'
      },
      {
        id: '5',
        title: 'Kingdom Builder Deluxe',
        description: 'Build and manage your empire',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        releaseDate: 'Jan 20, 2026'
      },
      {
        id: '6',
        title: 'Championship Soccer 2026',
        description: 'Ultimate football simulation',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        releaseDate: 'Jan 10, 2026'
      },
      {
        id: '7',
        title: 'Puzzle Paradise',
        description: 'Brain-teasing challenges await',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        releaseDate: 'Jan 5, 2026'
      },
      {
        id: '8',
        title: 'Alien Invasion Protocol',
        description: 'Defend Earth from invaders',
        gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
        releaseDate: 'Jan 22, 2026'
      },
      {
        id: '9',
        title: 'Art Studio Creator',
        description: 'Unleash your creativity',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        releaseDate: 'Jan 18, 2026'
      }
    ];
    return of(games);
  }

  getFreeGames(): Observable<FreeGame[]> {
    const games: FreeGame[] = [
      {
        id: '10',
        title: 'Board Game Collection',
        description: 'Free collection',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        store: 'Epic Games Store',
        validUntil: 'Feb 8'
      },
      {
        id: '11',
        title: 'Forest Adventure Deluxe',
        description: 'Free weekend',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        store: 'Steam',
        validUntil: 'Weekend'
      },
      {
        id: '12',
        title: 'Rocket League Rivals',
        description: 'Permanently free',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        store: 'GOG',
        validUntil: 'Permanent',
        permanentlyFree: true
      },
      {
        id: '13',
        title: 'Music Hero Ultimate',
        description: 'Free this week',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        store: 'Epic Games Store',
        validUntil: 'Feb 15'
      }
    ];
    return of(games);
  }

  getReleaseCalendar(): Observable<ReleaseCalendarItem[]> {
    const releases: ReleaseCalendarItem[] = [
      {
        id: 1,
        title: 'Dragon\'s Destiny: The Final Chapter',
        releaseDate: new Date(2026, 1, 5),
        platforms: 'PC, PlayStation 5, Xbox Series X'
      },
      {
        id: 2,
        title: 'Space Odyssey: Beyond the Stars',
        releaseDate: new Date(2026, 1, 12),
        platforms: 'PC, Mac'
      },
      {
        id: 3,
        title: 'Survival Island: Last Hope',
        releaseDate: new Date(2026, 1, 18),
        platforms: 'All Platforms'
      },
      {
        id: 4,
        title: 'Warriors of Valor: Remastered',
        releaseDate: new Date(2026, 1, 25),
        platforms: 'PlayStation 5, Xbox Series X'
      },
      {
        id: 5,
        title: 'Mystery Manor: Dark Secrets',
        releaseDate: new Date(2026, 1, 28),
        platforms: 'PC, Nintendo Switch'
      }
    ];
    return of(releases);
  }

  getFriendsActivity(): Observable<FriendActivity[]> {
    const activities: FriendActivity[] = [
      { id: 1, name: 'Sarah Johnson', game: 'Cyber Knights' },
      { id: 2, name: 'Mike Chen', game: 'Kingdom Builder' },
      { id: 3, name: 'Emma Davis', game: 'Puzzle Paradise' },
      { id: 4, name: 'Alex Martinez', game: 'Velocity Racing' }
    ];
    return of(activities);
  }

  getAds(): Observable<Ad[]> {
    const ads: Ad[] = [
      {
        id: 1,
        title: 'GameMaster Pro Controller',
        description: 'Professional gaming controller with customizable buttons. $59.99',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      {
        id: 2,
        title: 'Premium Gaming Chair',
        description: 'Ergonomic design for long gaming sessions. Save 40% today!',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      }
    ];
    return of(ads);
  }

  constructor() { }

  getWallPosts(): Observable<WallPost[]> {
    return of(this.wallPosts);
  }

  getCurrentlyPlaying(): Observable<CurrentlyPlaying[]> {
    return of(this.currentlyPlaying);
  }

  getRecentActivity(): Observable<Activity[]> {
    return of(this.recentActivity);
  }

  likePost(postId: string): Observable<void> {
    const post = this.wallPosts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
    return of(void 0);
  }
}
