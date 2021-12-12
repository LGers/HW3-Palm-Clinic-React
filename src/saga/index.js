import {all} from 'redux-saga/effects'

import {fetchCabinetPageWatcher, userAppointmentsWatcher} from "./fetchAppointmentsSaga";
import {
    createAppointmentWatcher,
    fetchDoctorsWatcher,
    fetchOccupationsWatcher,
    fetchTimeWatcher
} from "./createAppointmentSaga";
import {cancelAppointmentWatcher, confirmAppointmentWatcher, deleteAppointmentWatcher} from "./userCardEditSaga";
import {userTokensWatcher} from "./fetchUserTokensSaga";

export function* rootSagas() {
    yield all([
        userTokensWatcher(),
        userAppointmentsWatcher(),
        fetchOccupationsWatcher(),
        fetchDoctorsWatcher(),
        fetchTimeWatcher(),
        createAppointmentWatcher(),
        deleteAppointmentWatcher(),
        fetchCabinetPageWatcher(),
        cancelAppointmentWatcher(),
        confirmAppointmentWatcher(),
    ])

}