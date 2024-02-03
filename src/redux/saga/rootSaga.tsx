import { all } from 'redux-saga/effects';
import { songsSaga } from './songsSaga';
import { statsSaga } from './statsSaga';


export default function* rootSaga() {
  yield all([
    songsSaga(),
    statsSaga()
  ]);
}
