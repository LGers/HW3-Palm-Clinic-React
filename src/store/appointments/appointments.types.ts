export type AppointmentsType = {
    payload: {
        userRole: string
    }
}

export type ChangeAppointmentsType = {
    payload: {
        id:string
        request:string
        status: string
    }
}

export type AppointmentType =
  {
      id: string
      reason: string
      note: string
      patient_id: string
      doctor_id: string
      visit_date: string
      status: 'confirmed' | 'canceled' | 'waiting'
      doctor: {
          last_name: string
          first_name: string
          id: string
          photo: string
          specialization_name: string
      }
      patient: {
          last_name: string
          first_name: string
          id: string
          photo: string
          specialization_name: string
      }
  }

export interface Appointments {
    appointments: AppointmentType[]
    total: number | null
    isFetching: boolean
}
