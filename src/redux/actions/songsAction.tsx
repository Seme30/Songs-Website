import { createAction } from '@reduxjs/toolkit';
import { NewSong, Song, SongResponse } from '../../models/Song';

export const fetchSongsRequest = createAction('songs/fetchSongsRequest');
export const fetchSongsSuccess = createAction<SongResponse[]>('songs/fetchSongsSuccess');
export const fetchSongsFailure = createAction<string>('songs/fetchSongsFailure');

export const getSongRequest = createAction('songs/getSongRequest', (id: string) => ({
  payload: { id },
}));
export const getSongSuccess = createAction<Song>('songs/getSongSuccess');
export const getSongFailure = createAction<string>('songs/getSongFailure');


export const addSongRequest = createAction('songs/addSongRequest', (newSong: NewSong) => ({
    payload: newSong,
  }));
export const addSongSuccess = createAction<SongResponse>('songs/addSongSuccess');
export const addSongFailure = createAction<string>('songs/addSongFailure');


export const updateSongRequest = createAction(
    'songs/updateSongRequest',
    (id: string, updatedSong: NewSong) => ({
      payload: { id, updatedSong },
    })
  );

export const updateSongSuccess = createAction<SongResponse>('songs/updateSongSuccess');
export const updateSongFailure = createAction<string>('songs/updateSongFailure');

export const deleteSongRequest = createAction('songs/deleteSongRequest', (id: string) => ({
  payload: { id },
}));
export const deleteSongSuccess = createAction<string>('songs/deleteSongSuccess');
export const deleteSongFailure = createAction<string>('songs/fetchSongsFailure');
