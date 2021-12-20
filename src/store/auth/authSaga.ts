import {call, put, takeEvery} from "redux-saga/effects";
import {
    fetchUserProfile, redirectToCabinet,
    setAuthUser, setDoctorOccupation, fetchUserToken, fetchDoctorProfile,
} from "./authSlice";
import {CABINET_APPOINTMENTS_PATH, SIGN_IN_PATH} from "../../constants/path";
import {push} from "connected-react-router";
import {fetchAuthProfile, fetchAuthLogin_Token} from "../../api/auth";
import {errorMessage} from "../commonSaga";
import {doctorProfile} from "../../api/doctors";

type TokenType = {
    payload: {
        email: string, password: string
    }
}

export function* getTokenWorker(action: TokenType) {
    debugger
    try {
        const {data} = yield call(fetchAuthLogin_Token, action.payload.email, action.payload.password)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
        yield put(fetchUserProfile())
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* getTokensWatcher() {
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(fetchUserToken.type , getTokenWorker)
}


export function* getUserProfileWorker() {
    try {
        const {data} = yield call(fetchAuthProfile)
        yield put(setAuthUser(data))
        yield put(redirectToCabinet())
    } catch (error: any) {
        yield errorMessage(error)
        yield put(push(SIGN_IN_PATH))
    }
}

export function* getUserProfileWatcher() {
    yield takeEvery(fetchUserProfile.type, getUserProfileWorker)
}

export function* getDoctorWorker() {
    try {
        const {data} = yield call(doctorProfile)
        yield put(setDoctorOccupation(data.specialization_name))
    } catch (error: any) {
        yield errorMessage(error)
    }
    try {
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* getDoctorWatcher() {
    yield takeEvery(fetchDoctorProfile.type, getDoctorWorker)
}


export function* redirectToCabinetWorker() {
    yield put(push(CABINET_APPOINTMENTS_PATH))
}

export function* redirectToCabinetWatcher() {
    yield takeEvery(redirectToCabinet.type, redirectToCabinetWorker)
}
