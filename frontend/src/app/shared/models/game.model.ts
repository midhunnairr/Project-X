export interface Game {
  id: string;
  title: string;
  description?: string;

  developer?: string;
  year?: number;
  coverImage?: string;

  platforms?: Platform[];
  genres?: string[];

  gradient?: string;
  releaseDate?: string;
}


export interface GameReview {
  id: string;
  game: Game;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  reviewText: string;
  timestamp: Date;
  likes: number;
  comments: number;
}

export interface CurrentlyPlaying {
  game: Game;
  hoursPlayed: number;
  progress: number; // 0-100
}

export interface Activity {
  id: string;
  type: 'review' | 'completed' | 'started' | 'wishlist' | 'friend';
  userId: string;
  userName: string;
  userAvatar?: string;
  game?: Game;
  timestamp: Date;
  description: string;
}

export type Platform = 'PC' | 'PS5' | 'XBOX' | 'Switch' | 'PS4' | 'Xbox One';

export interface WallPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
  type: 'status' | 'review' | 'achievement' | 'friend';
  review?: GameReview;
  likes: number;
  comments: number;
}



export interface TrendingGame extends Game {
  fullDescription: string;
}

export interface FreeGame extends Game {
  store: string;
  validUntil: string;
  permanentlyFree?: boolean;
}

export interface ReleaseCalendarItem {
  id: number;
  title: string;
  releaseDate: Date;
  platforms: string;
}

export interface FriendActivity {
  id: number;
  name: string;
  game: string;
  timestamp?: string;
}

export interface Ad {
  id: number;
  title: string;
  description: string;
  gradient: string;
}
