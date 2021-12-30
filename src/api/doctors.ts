import { instance } from "./index";

const URL = {
    doctorsMe: () => 'doctors/me',
    adminDoctors: (id: string) => `admin/doctors/${id}`,
}

export const doctorProfile = () => instance.get(URL.doctorsMe())

export const updateDoctorProfile = (firstName: string, lastName: string, specializations: string) =>
    instance.patch(URL.doctorsMe(),
    {
        firstName,
        lastName,
        specializations
    }
)

export const updateAdminDoctorProfile = (id:string, firstName: string, lastName: string, specializations: string[]) =>
    instance.patch(URL.adminDoctors(id),
        {
            firstName,
            lastName,
            specializations
        }
    )
