import {instance} from "./index";

const URL = {
    patientsMe: () => 'patients/me',
}


export const patientProfile = () => instance.get(URL.patientsMe())