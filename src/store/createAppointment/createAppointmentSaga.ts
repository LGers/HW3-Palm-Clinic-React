import {call, put, takeEvery} from "redux-saga/effects";
import {
    fetchCreateAppointment,
    fetchDoctorsSpecialization,
    fetchTimesAppointment,
    fetchSpecializations,
} from '../../api/createAppointment'
import {
    createAppointment, fetchOccupations,
    fetchDoctors,
    setOccupations, setTimes,
    setDoctors, fetchTimes
} from "./createAppointmentSlice";
import {setPopupMessage, toggleShowMessage} from "../auth/authSlice";
import {push} from "connected-react-router";
import {CABINET_APPOINTMENTS_PATH} from "../../constants/path";
import {errorMessage} from "../commonSaga";


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


type OccupationsType = {
    payload: {
        occupationId: string
    }
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
    // @ts-ignore
    yield takeEvery(fetchDoctors.type, fetchDoctorsWorker)
}

type TimesFreeType = {
    payload: {
        day: string
        selected_doctor_id: string
    }
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
//todo TS action
function* createAppointmentWorker(action:any) {
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
