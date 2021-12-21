import {instance} from "./index";

const URL = {
    statuses: () => 'statuses',
}

export const statuses = () => instance.get(URL.statuses())