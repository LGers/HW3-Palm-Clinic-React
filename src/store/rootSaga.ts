import {all} from 'redux-saga/effects'

import {
    changeAppointmentWatcher, userAppointmentsWatcher,
} from "./appointments/appointmentsSaga";
import {
    createAppointmentWatcher,
    fetchDoctorsWatcher,
    fetchOccupationsWatcher, fetchTimesWatcher,
} from "./createAppointment/createAppointmentSaga";
import {
    getDoctorWatcher,
    getTokensWatcher,
    getUserProfileWatcher, SignUpWatcher,
} from "./auth/authSaga";
import {changeResolutionWatcher, userResolutionsWatcher} from "./resolutions/resolutionsSaga";
import {ChangeDoctorProfileWatcher, ChangePatientProfileWatcher} from "./profile/profileSaga";

export function* rootSagas() {
    yield all([
        getTokensWatcher(),
        getUserProfileWatcher(),
        SignUpWatcher(),

        fetchOccupationsWatcher(),
        fetchDoctorsWatcher(),
        fetchTimesWatcher(),

        userAppointmentsWatcher(),
        changeAppointmentWatcher(),
        createAppointmentWatcher(),

        userResolutionsWatcher(),
        changeResolutionWatcher(),
        getDoctorWatcher(),

        ChangePatientProfileWatcher(),
        ChangeDoctorProfileWatcher(),
    ])

}