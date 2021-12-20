import {CABINET_APPOINTMENTS_PATH, CABINET_PROFILE_PATH, CABINET_RESOLUTION_PATH} from "./path";

export type TabType = {
    key: number
    text: 'Profile' | 'Appointments' | 'Resolutions' | 'Patients'
    path: string
}

export const PATIENT_TABS: Array<TabType> = [
    {key: 1, text: 'Profile', path: CABINET_PROFILE_PATH},
    {key: 2, text: 'Appointments', path: CABINET_APPOINTMENTS_PATH},
    {key: 3, text: 'Resolutions', path: CABINET_RESOLUTION_PATH}
]
export const DOCTOR_TABS: Array<TabType> = [
    {key: 1, text: 'Patients', path: CABINET_RESOLUTION_PATH},
    {key: 2, text: 'Resolutions', path: CABINET_RESOLUTION_PATH}
]
