import {LOCATION_CHANGE, push} from "connected-react-router";
import {call, put, takeEvery, take, fork} from "redux-saga/effects";
import {fetchCreateAppointment, fetchOccupationDoctors, fetchTimesAppointment, getOccupations} from '../api/makeAppointmentApi'
import {
    createAppointment, selectDate,
    selectOccupation,
    setDoctors,
    setOccupations, setTimes,
    showErrorMessage
} from "../store/makeAppointmentSlice";
import {CABINET_PAGE_PATH, MAKE_APPOINTMENT_PAGE_PATH} from "../constants/path";

function* fetchDoctorsOccupationWorker() {
    const responseOccupations = yield call(getOccupations)

    if (responseOccupations.request.status.toString() ==='200') {
        yield put(setOccupations(responseOccupations.data))
    } else {
        yield put(showErrorMessage(responseOccupations.message))
    }
}


export function* fetchOccupationsWatcher() {
    while (true) {
        const action = yield take(LOCATION_CHANGE)
        if (action.payload.location.pathname === MAKE_APPOINTMENT_PAGE_PATH) {
            yield fork(fetchDoctorsOccupationWorker)
        }
    }
}

function* fetchDoctorsWorker(occupation_id) {

    const response = yield call(fetchOccupationDoctors, occupation_id.payload.occupationId)

    if (response.request.status.toString() ==='200') {
        yield put(setDoctors(response.data))
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* fetchDoctorsWatcher() {
    yield takeEvery(selectOccupation.type, fetchDoctorsWorker)
}

export function* fetchTimeWorker(action) {
    const response = yield call(fetchTimesAppointment, action.payload.day, action.payload.make_appointment.selected_doctor_id)
    if (response.request.status.toString() ==='200') {
        yield put(setTimes(response.data))
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* fetchTimeWatcher() {
    yield takeEvery(selectDate.type, fetchTimeWorker)
}

function* createAppointmentsWorker(action) {
    debugger
    const response = yield call(fetchCreateAppointment, action.payload)

    if (response.request.status.toString()==='201') {
        // yield put(fetchAppointments())
        yield put(push(CABINET_PAGE_PATH))
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* createAppointmentWatcher() {
    yield takeEvery(createAppointment.type, createAppointmentsWorker)
}