
export interface TotalStats {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
}

export interface GenreStats {
    _id: string,
    count: number
}

export interface GenreResponse {
    genres: GenreStats[]
}


export interface ArtistStats {
    totalSongs: number,
    artist: string,
    totalAlbums: number
}

export interface ArtistsResponse {
    artists: ArtistStats[]
}


export interface AlbumStats {
    _id: number,
    songs: MiniSong []
}

export interface MiniSong {
    title: string,
    artist: string
}

export interface AlbumResponse {
    albums: AlbumStats[]
}