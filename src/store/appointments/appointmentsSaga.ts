import {call, put, takeEvery} from "redux-saga/effects";
import {changeAppointment, fetchAppointments, setUserAppointments} from "./appointmentsSlice";
import {fetchUpdateAppointment, fetchUserAppointments} from "../../api/appointments";
import {errorMessage} from "../commonSaga";

type AppointmentsType = {
    payload: {
        userRole: string
    }
}

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
    // @ts-ignore //todo @ts-ignore
    yield takeEvery(fetchAppointments.type, fetchAppointmentsWorker)
}

type ChangeAppointmentsType = {
    payload: {
        id:string
        request:string
        status: string
    }
}
export function* changeAppointmentWorker(action:ChangeAppointmentsType) {
    const {id, request, status} = action.payload
    try {
        // @ts-ignore //todo @ts-ignore
        yield call(fetchUpdateAppointment, id, request, status)
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* changeAppointmentWatcher() {
    // @ts-ignore //todo @ts-ignore
    yield takeEvery(changeAppointment.type, changeAppointmentWorker)
}
