import { instance } from "./index";
import { DELETE, PATCH } from '../constants/api.dictionary';

const offset = 0
const limit = 100

const URL = {
    resolutions: () => `/resolutions`,
    resolutionsId: (id: string) => `/resolutions/${id}`,
    resolutionsUserMe: (userRole: string) => `/resolutions/${userRole}/me`,
    resolutionsDoctorSpecializationId: (id: string) => `/resolutions/doctor/specialization/${id}`,
}

export const fetchCreateResolution = (resolution: string, appointmentID: string) => instance.post(URL.resolutions(),
    {resolution, appointmentID})

export const fetchFilterResolutions = (date: string, offset: string, limit: string) => instance.get(URL.resolutions(),
    {params: {date, offset, limit}})

export const fetchUserResolutions = (userRole: string) => instance.get(URL.resolutionsUserMe(userRole),
    {params: {offset, limit}})

export const fetchUpdateResolution = (id: string, request: 'patch' | 'delete', resolution?: string) => {
    switch (request) {
        case PATCH :
            return instance.patch(URL.resolutionsId(id),
                {resolution},
            )
        case DELETE :
            return instance.delete(URL.resolutionsId(id))
    }
}