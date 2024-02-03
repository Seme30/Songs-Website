import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { fetchSongsSuccess, fetchSongsFailure, addSongSuccess, getSongSuccess, deleteSongSuccess } from '../actions/songsAction';
import { Song, SongResponse } from '../../models/Song';

export interface SongsState {
  data: SongResponse;
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  data: {
    count: 0,
    data: []
  },
  loading: false,
  error: null,
};

const songsReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(fetchSongsSuccess.type, (state, action: PayloadAction<SongResponse>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSongsFailure.type, (state, action: PayloadAction<string>) => {
        state.data = {
          count: 0,
          data: []
        };
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSongSuccess.type, (state, action: PayloadAction<Song>) => {
        state.data = {
          count: 1,
          data: [action.payload],
        };
        state.loading = false;
        state.error = null;
      })
      .addCase(addSongSuccess.type, (state) => {
        state.loading = false;
        state.error = null;
      })
    .addCase(deleteSongSuccess.type, (state) => {
        state.loading = false;
        state.error = null;
      });
  });
  

export default songsReducer;
