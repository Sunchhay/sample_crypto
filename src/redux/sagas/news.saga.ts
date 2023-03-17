import { call, put, takeLatest } from "redux-saga/effects";
import { getNews } from "../../api/News";
import { decryptData } from "../../services/crypto/decryption.service";
import { loadLoading, loadNewsError, loadNewsSuccess, requestNews } from "../actions/news";

export function* NewsSaga(action: any): any {
    try {
        const response: any = yield call(getNews, action.payload)
        if (response.message) {
            if (response.data) { 
                const plainText: any = yield call(decryptData, response.data)
                yield put(loadNewsSuccess(JSON.parse(plainText)))
            }
            yield put(loadLoading(false))
        } else {
            yield put(loadNewsError)
            yield put(loadLoading(false))
        }
    } catch (error) {
        console.log(error)
    }
}

export function* NewsWatchSaga() {
    yield takeLatest(requestNews.type, NewsSaga)
}