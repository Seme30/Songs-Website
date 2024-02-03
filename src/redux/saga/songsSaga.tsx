import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchSongsSuccess, fetchSongsFailure, fetchSongsRequest, addSongSuccess, addSongFailure, addSongRequest, updateSongSuccess, updateSongFailure, updateSongRequest, getSongSuccess, getSongRequest, deleteSongRequest } from '../actions/songsAction';
import { api } from '../api/api';
import { NewSong, Song, SongResponse } from '../../models/Song';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchSongsSaga() {
  try {
    const response: SongResponse[] = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(response));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* getSongSaga(action: PayloadAction<{ id: string;}>) {
  try {
    const response: Song = yield call(api.getSong, action.payload.id);
    yield put(getSongSuccess(response));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* deleteSongSaga(action: PayloadAction<{ id: string;}>) {
  try {
    const response: Song = yield call(api.deleteSong, action.payload.id);
    yield put(getSongSuccess(response));
    yield put(fetchSongsRequest());
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action: PayloadAction<{ title: string; artist: string; album?: string; genre?: string }>) {
  try {
    const newSongResponse: SongResponse = yield call(api.addSong, action.payload);
    yield put(addSongSuccess(newSongResponse));
    yield put(fetchSongsRequest());
  } catch (error: any) {
    yield put(addSongFailure(error.message));
  }
}

interface UpdateSongActionPayload {
  id: string;
  updatedSong: NewSong;
}

function* updateSongSaga(action: PayloadAction<UpdateSongActionPayload>) {
  try {
    const { id, updatedSong } = action.payload;
    const response: SongResponse = yield call(api.updateSong, id, updatedSong);
    yield put(updateSongSuccess(response));
    yield put(fetchSongsRequest());
  } catch (error: any) {
    yield put(updateSongFailure(error.message));
  }
}


export function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(addSongRequest.type, addSongSaga);
  yield takeLatest(updateSongRequest.type, updateSongSaga);
  yield takeLatest(getSongRequest.type, getSongSaga);
  yield takeLatest(deleteSongRequest.type, deleteSongSaga);
}
