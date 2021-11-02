import { all, call } from 'redux-saga/effects';
import { userSaga } from '../User/user.saga';
import { fetchCollectionsStart } from './shopRedux.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSaga)]);
};