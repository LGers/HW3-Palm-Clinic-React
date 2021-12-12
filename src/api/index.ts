import axios from "axios";

export const API_URL: string = 'https://reactlabapi.herokuapp.com/api/'

export const fetchTokensFromApi = (userAuthData: { email: string, password: string }) => {
    return axios.post(
        `${API_URL}auth/login`,
        {
            "userName": userAuthData.email,
            "password": userAuthData.password
        })
        .then(response => response)
        .catch(error => error)
}

export const fetchProfile = () => {
    return axios.get(`${API_URL}auth/profile`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => response)
        .catch(error => error)
}


export const fetchUserAppointments = (userRole: string) => {
    const token: string | null = localStorage.getItem('access_token');

    return axios.get(`${API_URL}appointments/${userRole}/me?offset=0&limit=100`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response)
        .catch(error => error)
}

type OccupationType = { id: string; specialization_name: string; }

// export const getOccupations = (dispatch: (param: any) => void) => {
//     const token: string | null = localStorage.getItem('access_token');
//     return axios.get(`${API_URL}specializations`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then(response => response)
//         .catch(error => error)
//
// }
//
// export const fetchOccupationDoctors = (option: string) => {
//     return axios.get(`${API_URL}doctors/specialization/${option}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('access_token')}`
//             }
//         })
//         .then(response => response)
//         .catch(error => error)
// }
//
//
// export const fetchTimesAppointment = (isoDate: string, selectedDoctorId: string) => {
//     return axios.get(`${API_URL}appointments/time/free?date=${isoDate}&doctorID=${selectedDoctorId}`,
//
//         {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('access_token')}`
//             }
//         })
//         .then(response => response)
//         .catch(error => error)
// }
//
//
// export const fetchCreateAppointment = (values: any) => {
//     const token: string | null = localStorage.getItem('access_token');
//     return axios.post(`${API_URL}appointments`,
//         {
//             date: values.time,
//             reason: values.reasonForVisit,
//             note: values.note,
//             doctorID: values.doctor
//             // values
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     )
//         .then(response => response)
//         .catch(error => error)
// }