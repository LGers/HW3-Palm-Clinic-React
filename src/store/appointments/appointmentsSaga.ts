import { call, put, takeEvery } from "redux-saga/effects";
import { changeAppointment, fetchAppointments, setUserAppointments } from "./appointmentsSlice";
import { fetchUpdateAppointment, fetchUserAppointments } from "../../api/appointments";
import { errorMessage } from "../commonSaga";
import { AppointmentsType, ChangeAppointmentsType } from './appointments.types';

export function* fetchAppointmentsWorker(action: AppointmentsType) {
    const {userRole} = action.payload
    try {
        // const userAppointments = yield call(fetchUserAppointments, userRole)
        const {data} = yield call(fetchUserAppointments, userRole)
        yield put(setUserAppointments(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* userAppointmentsWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore //todo @ts-ignore
    yield takeEvery(fetchAppointments.type, fetchAppointmentsWorker)
}

export function* changeAppointmentWorker(action:ChangeAppointmentsType) {
    const {id, request, status} = action.payload
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore //todo @ts-ignore
        yield call(fetchUpdateAppointment, id, request, status)
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* changeAppointmentWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore //todo @ts-ignore
    yield takeEvery(changeAppointment.type, changeAppointmentWorker)
}
