export interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string | null;
    genre: string | null;
    __v: number;
  }
  

  export interface SongResponse {
    count: number;
    data: Song[];
  }


  export interface NewSong {
    title: string;
    artist: string;
    album?: string;
    genre?: string;
  }
  