import { combineReducers } from '@reduxjs/toolkit';
import songsReducer from './songsReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  songs: songsReducer,
  stats: statsReducer
});

export default rootReducer;