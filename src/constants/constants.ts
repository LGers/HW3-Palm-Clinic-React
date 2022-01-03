export const FETCH_USERS_LIMIT = 100
export const FETCH_USERS_OFFSET = 0
export const RESOLUTIONS_LIMIT = 8


export const DOCTOR_CABINET_SORT_OPTIONS = [
    {value: 'Date', label: 'Date'},
    {value: 'Name', label: 'Name'}
]

export const PATIENT_CABINET_SORT_OPTIONS = [
    {value: 'upcoming', label: 'Upcoming'},
    {value: 'outDate', label: 'Out date'},
    {value: 'upcoming2', label: 'Upcoming2'},
    {value: 'upcoming3', label: 'Upcoming3'}
]

export const USER_ROLE = {
    PATIENT: 'patient',
    DOCTOR: 'doctor',
    ADMIN: 'admin'
}

export const PATIENT_CABINET = {
    ROLE: 'patient',
    TITLE: 'My Appointments',
    SELECT_LABEL: 'Show:',
    SORT_OPTIONS: [
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'outDate', label: 'Out date'},
    ]
}

export const DOCTOR_CABINET = {
    ROLE: 'doctor',
    TITLE: 'My Patients',
    SELECT_LABEL: 'Sort by:',
    SORT_OPTIONS: [
        {value: 'Date', label: 'Date'},
        {value: 'Name', label: 'Name'}
    ]
}

export const CREATE_APPOINTMENT ={
    OCCUPATION: 'occupation',
    DOCTOR_ID: 'doctorID',
    REASON: {
        INPUT_NAME:'reason',
        PLACEHOLDER:'Reason for visit'
    },
    NOTE: {
        INPUT_NAME:'note',
        PLACEHOLDER:'Leave a note if needed'
    }
}