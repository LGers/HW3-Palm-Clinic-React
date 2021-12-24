import {call, put, takeEvery} from "redux-saga/effects";
import {setAuthUser} from "../auth/authSlice";
import {errorMessage} from "../commonSaga";
import {updateDoctorProfile} from "../../api/doctors";
import {updatePatientProfile} from "../../api/patients";
import {fetchDoctorChangeProfile, fetchPatientChangeProfile} from "./profileSlice";
import {changePassword} from "../../api/auth";

type PatientProfileType = {
    payload: {
        firstName: string
        lastName: string
    }
}

type DoctorProfileType = {
    payload: {
        firstName: string
        lastName: string
        specializations: string
    }
}

function* ChangeDoctorProfileWorker(action: DoctorProfileType) {
    const {firstName, lastName, specializations} = action.payload
    try {
        const {data} = yield call(updateDoctorProfile, firstName, lastName, specializations)
        yield put(setAuthUser(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* ChangeDoctorProfileWatcher() {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(fetchDoctorChangeProfile.type, ChangeDoctorProfileWorker)
}

function* ChangePatientProfileWorker(action: PatientProfileType) {
    const {firstName, lastName} = action.payload
    try {
        const {data} = yield call(updatePatientProfile, firstName, lastName)
        yield put(setAuthUser(data))
    } catch (error: any) {
        yield errorMessage(error)
    }
}

export function* ChangePatientProfileWatcher() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(fetchPatientChangeProfile.type, ChangePatientProfileWorker);
}