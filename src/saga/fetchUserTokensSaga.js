import {call, put, takeEvery} from "redux-saga/effects";
import {fetchLogonUser} from "../store/currentUserSlice";
import {fetchTokensFromApi} from "../api";
import {CABINET_PAGE_PATH} from "../constants/path";
import {push} from "connected-react-router";

function* fetchUserTokensSaga(userAuthData) {
    const response = yield call(fetchTokensFromApi, userAuthData.payload)
    if (response.data) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        yield put(push(CABINET_PAGE_PATH))
    } else {
        console.log('Login error:', response.data)
    }
}

export function* userTokensWatcher() {
    yield takeEvery(fetchLogonUser.type, fetchUserTokensSaga)
}
