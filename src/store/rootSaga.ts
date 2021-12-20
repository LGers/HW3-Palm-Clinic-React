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
    getUserProfileWatcher,
    redirectToCabinetWatcher
} from "./auth/authSaga";
import {changeResolutionWatcher, userResolutionsWatcher} from "./resolutions/resolutionsSaga";

export function* rootSagas() {
    yield all([
        getTokensWatcher(),
        getUserProfileWatcher(),
        redirectToCabinetWatcher(),

        fetchOccupationsWatcher(),
        fetchDoctorsWatcher(),
        fetchTimesWatcher(),

        userAppointmentsWatcher(),
        changeAppointmentWatcher(),
        createAppointmentWatcher(),

        userResolutionsWatcher(),
        changeResolutionWatcher(),
        getDoctorWatcher(),
    ])

}