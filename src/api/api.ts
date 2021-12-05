import axios from "axios";
import {
    setLogonUser,
    setOccupations,
    setUserAppointments,
    showErrorMessage,
    showSuccessMessage
} from "../store/userSlice";
import {CABINET_PAGE_PATH} from "../constants/path";

const apiUrl:string = 'https://reactlabapi.herokuapp.com/api/'

export const getCurrentUser = (token: string | null, dispatch: (param: any) => void) => {
    axios.get(`${apiUrl}auth/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const current_user = response.data
            dispatch(setLogonUser({current_user}))

            const userRole = current_user.role_name.toLowerCase()
            axios.get(`${apiUrl}appointments/${userRole}/me?offset=0&limit=100`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    const userAppointments = response.data
                    dispatch(setUserAppointments({userAppointments}))
                })
                .catch(error =>
                    console.log('error', error)
                )
        })
        .catch(error =>
            console.log('error', error)
        )
}

type OccupationType = {id: string; specialization_name: string;}

export const getOccupations = (token: string, dispatch: (param: any) => void) => {
    axios.get(`${apiUrl}specializations`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const specializations = response.data
            const occupations = specializations.map((occupation: OccupationType) => {
                return {value: occupation.id, label: occupation.specialization_name}
            })
            dispatch(setOccupations({occupations}))
        })
        .catch(error =>
            console.log(error)
        )

}

export const createAppointment = (values: any, token: string, dispatch: (param?: any) => void, history:any) =>{
    axios.post(`${apiUrl}appointments`,
        {
            date: values.time,
            reason: values.reasonForVisit,
            note: values.note,
            doctorID: values.doctor
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then(response => {
            console.log(response.data)
            dispatch(showSuccessMessage(null))
            history.push(CABINET_PAGE_PATH);
            setTimeout(() =>  dispatch(showSuccessMessage(null)), 2000)
        })
        .catch(error => {
                console.log('MakeAppointmentError: ', error)
                dispatch(showErrorMessage({errorMessage:'Some Error'}))
                setTimeout(() => dispatch(showErrorMessage({errorMessage:''})), 2000)
            }
        )
}
