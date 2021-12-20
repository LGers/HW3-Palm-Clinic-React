import {instance} from "./index";

export const fetchSpecializations = () => instance.get(`/specializations`)
