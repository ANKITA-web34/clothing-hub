import { takeLatest, call, put } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionFailure,  fetchCollectionSuccess} from "./shopRedux.action";
import ShopActionTypes from "./shopRedux.type";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch(error) {
    yield put(fetchCollectionFailure(error.collectionsMap));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START,
     fetchCollectionAsync);
}
