export type GetResolutionsType = {
  payload: {
    userRole: string
    offset: number
  }
}

export type ChangeResolutionsType = {
  payload: {
    id: string
    request: string
    resolution: string
  }
}

export type ResolutionsType =
  {
    id: string
    appointment_id: string
    next_appointment_date: string
    resolution: string
    visit_date: string
    patient: {
      last_name: string
      first_name: string
      id: string
      photo: string
      specialization_name: string
    }
    doctor: {
      last_name: string
      first_name: string
      id: string
      photo: string
      specialization_name: string
    }
    admin: {
      last_name: string
      first_name: string
      id: string
      photo: string
    }
  }

export interface Resolutions {
  resolutions: ResolutionsType[]
  total: number | null
  isFetching: boolean
}