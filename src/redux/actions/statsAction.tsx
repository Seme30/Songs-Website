import { createAction } from '@reduxjs/toolkit';
import {  AlbumStats, ArtistStats, GenreStats, TotalStats } from '../../models/Stat';

export const fetchTotalStatsRequest = createAction('stats/fetchTotalStatsRequest');
export const fetchTotalStatsSuccess = createAction<TotalStats>('stats/fetchTotalStatsSuccess');
export const fetchTotalStatsFailure = createAction<string>('stats/fetchTotalStatsFailure');

export const fetchGenreStatsRequest = createAction('stats/fetchGenreStatsRequest');
export const fetchGenreStatsSuccess = createAction<GenreStats[]>('stats/fetchGenreStatsSuccess');
export const fetchGenreStatsFailure = createAction<string>('stats/fetchGenreStatsFailure');

export const fetchArtistStatsRequest = createAction('stats/fetchArtistStatsRequest');
export const fetchArtistStatsSuccess = createAction<ArtistStats[]>('stats/fetchArtistStatsSuccess');
export const fetchArtistStatsFailure = createAction<string>('stats/fetchArtistStatsFailure');

export const fetchAlbumStatsRequest = createAction('stats/fetchAlbumStatsRequest');
export const fetchAlbumStatsSuccess = createAction<AlbumStats[]>('stats/fetchAlbumStatsSuccess');
export const fetchAlbumStatsFailure = createAction<string>('stats/fetchAlbumStatsFailure');
