import { call, put, takeEvery } from "redux-saga/effects";
import { changeResolution, fetchResolutions, setUserResolutions } from "./resolutionsSlice";
import { fetchUpdateResolution, fetchUserResolutions } from "../../api/resolutions";
import { errorMessage } from "../commonSaga";
import { ChangeResolutionsType, GetResolutionsType } from './resolutions.types';

export function* fetchResolutionsWorker(action: GetResolutionsType) {
    try {
        const {data} = yield call(fetchUserResolutions, action.payload.userRole, action.payload.offset)
        yield put(setUserResolutions(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* userResolutionsWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(fetchResolutions.type, fetchResolutionsWorker) // todo @ts-ignore
}

export function* changeResolutionWorker(action: ChangeResolutionsType) {
    const {id, request, resolution} = action.payload
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield call(fetchUpdateResolution, id, request, resolution) //todo @ts-ignore
    } catch (error:any) {
        yield errorMessage(error)
    }
}

export function* changeResolutionWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(changeResolution.type, changeResolutionWorker) //todo @ts-ignore
}
