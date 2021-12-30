import { call, put, takeEvery } from "redux-saga/effects";
import {
    fetchUserProfile,
    setAuthUser,
    setDoctorOccupation,
    fetchSignIn,
    fetchDoctorProfile,
    fetchSignUp,
    fetchChangePassword,
} from "./authSlice";
import { SIGN_IN_PATH } from "../../constants/path";
import { push } from "connected-react-router";
import { fetchAuthProfile, fetchAuthLogin_Token, signUp, changePassword } from "../../api/auth";
import { errorMessage } from "../commonSaga";
import { doctorProfile } from "../../api/doctors";
import { PasswordType, SignInType, SignUpType } from './auth.types';

export function* getTokenWorker(action: SignUpType) {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(fetchSignIn.type, getTokenWorker)
}

export function* getUserProfileWorker() {
    try {
        const {data} = yield call(fetchAuthProfile)
        yield put(setAuthUser(data))
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
}

export function* getDoctorWatcher() {
    yield takeEvery(fetchDoctorProfile.type, getDoctorWorker)
}

export function* SignUpWorker(action: SignInType) {

    const {email, password, firstName, lastName} = action.payload
    try {
        const {data} = yield call(signUp, email, password, firstName, lastName)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
        yield put(push(SIGN_IN_PATH)) //todo auto SignIn
        // yield put(fetchUserProfile())
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* SignUpWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(fetchSignUp.type, SignUpWorker)
}

function* ChangePasswordWorker(action: PasswordType) {
    const {oldPassword, newPassword} = action.payload
    try {
    yield call(changePassword, oldPassword, newPassword)
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* ChangePasswordWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(fetchChangePassword.type, ChangePasswordWorker);
}
