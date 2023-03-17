import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getAuthorize } from "../../api/Authorize";
import { getCategory } from "../../api/Category";
import { decryptData } from "../../services/crypto/decryption.service";
import { loadCategoryError, loadCategorySuccess, requestCategory } from "../actions/category";
import { loadLoading } from "../actions/news";

export function* CategorySaga(): any {
    try {
        const response: any = yield call(getCategory)
        if (response.message) {
            if (response.data) {
                const plainText: any = yield call(decryptData, response.data) // decrypt data from api
                yield put(loadCategorySuccess(JSON.parse(plainText))) // convert string to JSON
            }
            yield put(loadLoading(false))
        } else {
            yield put(loadLoading(false))
            yield put(loadCategoryError)
        }
    } catch (error) {
        console.log(error)
    }
}

export function* CategoryWatchSaga() {
    yield takeEvery(requestCategory.type, CategorySaga)
}