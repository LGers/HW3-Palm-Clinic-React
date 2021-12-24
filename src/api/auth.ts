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
        password
    }
)

export const signUp = (email: string, password: string, firstName: string, lastName: string) => instance.post(URL.authRegistration(),
    {
        "userName": email,
        password,
        firstName,
        lastName,
    }
)

export const fetchAuthProfile = () => instance.get(URL.authProfile())

export const changePassword = (newPassword: string, oldPassword: string) => instance.patch(URL.authPassword(),
    {
        oldPassword,
        newPassword,
    }
)
