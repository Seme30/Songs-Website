import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import {
  fetchTotalStatsSuccess,
  fetchGenreStatsSuccess,
  fetchArtistStatsSuccess,
  fetchAlbumStatsSuccess,
  fetchTotalStatsFailure,
} from '../actions/statsAction';
import { AlbumStats, ArtistStats, GenreStats, TotalStats } from '../../models/Stat';

export interface StatState {
  totalStats: TotalStats;
  genreStats: GenreStats[];
  artistStats: ArtistStats[];
  albumStats: AlbumStats[];
  loading: boolean;
  error: string | null;
}

const initialState: StatState = {
  totalStats: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
  },
  genreStats: [],
  artistStats: [],
  albumStats: [],
  loading: false,
  error: null,
};

const statsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTotalStatsSuccess, (state, action: PayloadAction<TotalStats>) => {
      state.totalStats = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchGenreStatsSuccess, (state, action: PayloadAction<GenreStats[]>) => {
      state.genreStats = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchArtistStatsSuccess, (state, action: PayloadAction<ArtistStats[]>) => {
      state.artistStats = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchAlbumStatsSuccess, (state, action: PayloadAction<AlbumStats[]>) => {
      state.albumStats = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchTotalStatsFailure.type, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default statsReducer;
