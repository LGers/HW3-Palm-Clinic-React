import { instance } from "./index";

const URL = {
    patientsMe: () => 'patients/me',
    adminPatients: (id: string) => `admin/patients/${id}`,
}

export const patientProfile = () => instance.get(URL.patientsMe())

export const updatePatientProfile = (firstName: string, lastName: string, ) =>
    instance.patch(URL.patientsMe(),
        {
            firstName,
            lastName,
        }
    )

export const updateAdminPatientProfile = (id: string, firstName: string, lastName: string, ) =>
    instance.patch(URL.adminPatients(id),
        {
            firstName,
            lastName,
        }
    )
