export type Provider = "bilibili" | "netease" | "spotify" | "youtube";

export interface WithProvider<T> {
  provider: Provider;
  data: T;
}

export interface Artist {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
}

export interface Song {
  id: string;
  name: string;
  artists: Artist[];
  cover?: string;
  duration?: number; // unit: seconds
}

export interface SongCollection {
  id: string;
  name: string;
  artists: Artist[];
  cover?: string;
  description?: string;
  songs: Song[];
}

export type SearchItem =
  | { song: Song }
  | { playlist: SongCollection }
  | { artist: Artist }
  | { album: SongCollection };
