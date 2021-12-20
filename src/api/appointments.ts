import {instance} from "./index";
const offset = 0
const limit = 100

const URL = {
    appointmentsUserMe: (userRole: string) => `/appointments/${userRole}/me`,
    appointmentsId:(id: string) => `/appointments/${id}`,
    appointmentsTimeFree:() => `/appointments/time/free}`
}

export const fetchUserAppointments = (userRole: string) => instance.get(URL.appointmentsUserMe(userRole),
        {params: {offset, limit}})

export const fetchUpdateAppointment = (id: string,  request: 'patch' | 'delete', status?: 'canceled' | 'confirmed') => {
    switch (request) {
        case 'patch' :
            return instance.patch(URL.appointmentsId(id),
                {status}
            )
        case 'delete' :
            return instance.delete(URL.appointmentsId(id))
    }
}
