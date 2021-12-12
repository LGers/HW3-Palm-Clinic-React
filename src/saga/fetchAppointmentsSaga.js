import {call, fork, put, take, takeEvery} from "redux-saga/effects";
import {fetchAppointments, setUserAppointments} from "../store/appointmentsSlice";
import {fetchProfile, fetchUserAppointments} from '../api'
import {setLogonUser} from "../store/currentUserSlice";
import {LOCATION_CHANGE} from "connected-react-router";
import {CABINET_PAGE_PATH} from "../constants/path";

export function* fetchAppointmentsSaga() {
    const logonUserData = yield call(fetchProfile)
    yield put(setLogonUser(logonUserData.data))
    const userRole = yield logonUserData.data.role_name.toLowerCase()
    const userAppointments = yield call(fetchUserAppointments, userRole)
    yield put(setUserAppointments(userAppointments.data))
}

export function* userAppointmentsWatcher() {
    yield takeEvery(fetchAppointments.type, fetchAppointmentsSaga)
}

function* fetchCabinetPageWorker() {
    yield put(fetchAppointments())

}

export function* fetchCabinetPageWatcher() {
    while (true) {
        const action = yield take(LOCATION_CHANGE)
        if (action.payload.location.pathname === CABINET_PAGE_PATH) {
            yield fork(fetchCabinetPageWorker)
        }
    }
}