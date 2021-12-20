import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://reactlabapi.herokuapp.com/api',
})