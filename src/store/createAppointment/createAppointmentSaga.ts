import {call, put, takeEvery} from "redux-saga/effects";
import {
    fetchCreateAppointment, fetchDoctorsSpecialization,
    fetchTimesAppointment, fetchSpecializations,
} from '../../api/createAppointment'
import {
    createAppointment, fetchOccupations, fetchDoctors,
    setOccupations, setTimes, setDoctors, fetchTimes
} from "./createAppointmentSlice";
import {setPopupMessage, toggleShowMessage} from "../auth/authSlice";
import {push} from "connected-react-router";
import {CABINET_APPOINTMENTS_PATH} from "../../constants/path";
import {errorMessage} from "../commonSaga";
import { createAppointmentType, OccupationsType, TimesFreeType } from './createAppointment.types';


function* fetchOccupationsWorker() {
    try {
        const {data} = yield call(fetchSpecializations)
        yield put(setOccupations(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}
export function* fetchOccupationsWatcher() {
    yield takeEvery(fetchOccupations.type, fetchOccupationsWorker)
}


function* fetchDoctorsWorker(action: OccupationsType) {
    try {
        const {data} = yield call(fetchDoctorsSpecialization, action.payload.occupationId)
        yield put(setDoctors(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}
export function* fetchDoctorsWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(fetchDoctors.type, fetchDoctorsWorker)
}

function* fetchTimesWorker(action: TimesFreeType) {
    const {day, selected_doctor_id} = action.payload
    try {
        const {data} = yield call(fetchTimesAppointment, day, selected_doctor_id)
        yield put(setTimes(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* fetchTimesWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(fetchTimes.type, fetchTimesWorker)
}

function* createAppointmentWorker(action: createAppointmentType) {
    try {
        const {statusText} = yield call(fetchCreateAppointment, action.payload)
        yield put(setPopupMessage({
            title: `Appointment ${statusText}`,
            message: `Appointment created success`,
            isSuccess: true
        }))
        yield put(push(CABINET_APPOINTMENTS_PATH))
        yield put(toggleShowMessage())
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* createAppointmentWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // todo @ts-ignore
    yield takeEvery(createAppointment.type, createAppointmentWorker)
}
