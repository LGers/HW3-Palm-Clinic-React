export type PatientProfileType = {
    payload: {
        firstName: string
        lastName: string
    }
}

export type DoctorProfileType = {
    payload: {
        firstName: string
        lastName: string
        specializations: string
    }
}

export interface CreateAppointment {
    first_name: string,
    last_name: string,
    specializations: string[],
    isFetching: boolean
}
