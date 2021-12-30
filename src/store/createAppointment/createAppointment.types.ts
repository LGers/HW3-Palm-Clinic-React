export type OccupationsType = {
  payload: {
    occupationId: string
  }
}

export type TimesFreeType = {
  payload: {
    day: string
    selected_doctor_id: string
  }
}

export type createAppointmentType = {
  payload: {
    date: string
    doctorID: string
    note: string
    reason: string
  }
}

export interface CreateAppointment {
  occupations: any[]
  doctors: any[]
  times: any[]
  isFetching: boolean
}