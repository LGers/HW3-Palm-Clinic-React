import {instance} from "./index";

const URL = {
    doctorsMe: () => 'doctors/me',
}

export const doctorProfile = () => instance.get(URL.doctorsMe())