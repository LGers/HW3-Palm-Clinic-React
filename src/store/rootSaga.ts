import { all } from 'redux-saga/effects'
import {
    changeAppointmentWatcher, userAppointmentsWatcher,
} from "./appointments/appointmentsSaga";
import {
    createAppointmentWatcher,
    fetchDoctorsWatcher,
    fetchOccupationsWatcher, fetchTimesWatcher,
} from "./createAppointment/createAppointmentSaga";
import {
    ChangePasswordWatcher,
    getDoctorWatcher,
    getTokensWatcher,
    getUserProfileWatcher, SignUpWatcher,
} from "./auth/authSaga";
import { changeResolutionWatcher, userResolutionsWatcher } from "./resolutions/resolutionsSaga";
import { ChangeDoctorProfileWatcher, ChangePatientProfileWatcher } from "./profile/profileSaga";

export function* rootSagas() {
    yield all([
        getTokensWatcher(),
        getUserProfileWatcher(),
        SignUpWatcher(),
        ChangePasswordWatcher(),

        fetchOccupationsWatcher(),
        fetchDoctorsWatcher(),
        fetchTimesWatcher(),

        userAppointmentsWatcher(),
        changeAppointmentWatcher(),
        createAppointmentWatcher(),
        // createResolutionWatcher(),

        userResolutionsWatcher(),
        changeResolutionWatcher(),
        getDoctorWatcher(),

        ChangePatientProfileWatcher(),
        ChangeDoctorProfileWatcher(),
    ])
}