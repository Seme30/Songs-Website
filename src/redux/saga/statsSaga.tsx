import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchTotalStatsRequest,
  fetchTotalStatsSuccess,
  fetchTotalStatsFailure,
  fetchGenreStatsRequest,
  fetchGenreStatsSuccess,
  fetchGenreStatsFailure,
  fetchArtistStatsRequest,
  fetchArtistStatsSuccess,
  fetchArtistStatsFailure,
  fetchAlbumStatsRequest,
  fetchAlbumStatsSuccess,
  fetchAlbumStatsFailure,
} from '../actions/statsAction';
import { statsApi } from '../api/statsapi';
import { AlbumStats, ArtistStats, GenreStats, TotalStats } from '../../models/Stat';

function* fetchTotalStatsSaga() {
  try {
    const response: TotalStats = yield call(statsApi.fetchTotalStats);
    yield put(fetchTotalStatsSuccess(response));
  } catch (error: any) {
    yield put(fetchTotalStatsFailure(error.message));
  }
}

function* fetchGenreStatsSaga() {
  try {
    const response: GenreStats[] = yield call(statsApi.fetchGenreStats);
    yield put(fetchGenreStatsSuccess(response));
  } catch (error: any) {
    yield put(fetchGenreStatsFailure(error.message));
  }
}

function* fetchArtistStatsSaga() {
  try {
    const response: ArtistStats[] = yield call(statsApi.fetchArtistStats);
    yield put(fetchArtistStatsSuccess(response));
  } catch (error: any) {
    yield put(fetchArtistStatsFailure(error.message));
  }
}

function* fetchAlbumStatsSaga() {
  try {
    const response: AlbumStats[] = yield call(statsApi.fetchAlbumStats);
    yield put(fetchAlbumStatsSuccess(response));
  } catch (error: any) {
    yield put(fetchAlbumStatsFailure(error.message));
  }
}

export function* statsSaga() {
  yield takeLatest(fetchTotalStatsRequest.type, fetchTotalStatsSaga);
  yield takeLatest(fetchGenreStatsRequest.type, fetchGenreStatsSaga);
  yield takeLatest(fetchArtistStatsRequest.type, fetchArtistStatsSaga);
  yield takeLatest(fetchAlbumStatsRequest.type, fetchAlbumStatsSaga);
}
