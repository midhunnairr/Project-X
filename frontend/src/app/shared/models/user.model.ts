export interface User {
  id: string;
  name: string;
  bio: string;
  location: string;
  favoriteGenres: string[];
  gamingSince: string;
  platforms: string[];
  profilePicture?: string;
  coverPhoto?: string;
  stats: UserStats;
}

export interface UserStats {
  friends: number;
  gamesPlayed: number;
  reviews: number;
  hoursLogged: number;
  currentlyPlaying: number;
  completed: number;
  achievements: number;
}

export interface Friend {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'playing';
  currentGame?: string;
}
