import {instance} from "./index";

instance.interceptors.request.use(async (request) => {
    request.headers = {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };
    return request;
});


const URL = {
    authLogin: () => 'auth/login',
    authRegistration: () => 'auth/registration',
    authProfile: () => 'auth/profile',
    authPassword: () => 'auth/password',
}

export const fetchAuthLogin_Token = (email: string, password: string) => instance.post(URL.authLogin(),
    {
        "userName": email,
        "password": password
    }
)
//todo check it //change password
export const fetchAuthPassword = (oldPassword: string, newPassword: string) => instance.patch(URL.authPassword(),
    {
        oldPassword,
        newPassword
    }
)
//todo check it
export const fetchAuthRegistration= (email: string, password: string, firstName:string, lastName:string) => instance.post(URL.authProfile(),
    {
        "userName": email,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
    }
)
//

export const fetchAuthProfile = () => instance.get(URL.authProfile())
