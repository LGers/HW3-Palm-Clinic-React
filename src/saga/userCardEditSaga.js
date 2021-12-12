import {call, put, takeEvery} from "redux-saga/effects";
import {showErrorMessage, showSuccessMessage} from "../store/makeAppointmentSlice";
import {cancelAppointment, confirmAppointment, deleteAppointment} from "../store/currentUserSlice";
import {fetchDeleteAppointment, fetchUpdateAppointmentStatus} from "../api/userCardApi";
import {fetchAppointments} from "../store/appointmentsSlice";

function* deleteAppointmentWorker(action) {

    const response = yield call(fetchDeleteAppointment, action.payload)
    if (response.request.status.toString() === '200') {
        yield put(fetchAppointments())
        yield put(showSuccessMessage())
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* deleteAppointmentWatcher() {
    yield takeEvery(deleteAppointment.type, deleteAppointmentWorker)
}

function* confirmAppointmentWorker(action) {
    const response = yield call(fetchUpdateAppointmentStatus, action.payload, 'confirmed')

    if (response.request.status.toString() === '200') {
        yield put(fetchAppointments())
        yield put(showSuccessMessage())
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* confirmAppointmentWatcher() {
    yield takeEvery(confirmAppointment.type, confirmAppointmentWorker)
}


function* cancelAppointmentWorker(action) {
    const response = yield call(fetchUpdateAppointmentStatus, action.payload, 'canceled')

    if (response.request.status.toString() === '200') {
        yield put(fetchAppointments())
        yield put(showSuccessMessage())
    } else {
        yield put(showErrorMessage(response.message))
    }
}

export function* cancelAppointmentWatcher() {
    yield takeEvery(cancelAppointment.type, cancelAppointmentWorker)
}