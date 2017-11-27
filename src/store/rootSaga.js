import { all } from 'redux-saga/effects';

import { filmsSaga } from '../containers/searchContainer/searchData/searchActions';
import { filmSaga } from '../containers/detailsContainer/detailsData/detailsActions';

export default function* rootSaga() {
  yield all([
      filmsSaga(),
      filmSaga()
  ]);
}