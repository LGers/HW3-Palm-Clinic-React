export type SignUpType = {
    payload: {
        email: string, password: string
    }
}

export type SignInType = {
    payload: {
        email: string, password: string,
        firstName: string, lastName: string
    }
}

export type PasswordType = {
    payload: {
        oldPassword: string,
        newPassword: string,
    }
}

export type AuthUser = {
    data: {
        id: string
        first_name: string
        last_name: string
        photo: string
        role_name: 'doctor' | 'patient' | 'admin'
    },
    occupation: string
    roleNameInRequest: 'doctor' | 'patient' | 'admin'
    isFetching: boolean
    isTokenExist: boolean
    popupMessage: {
        isSuccess: boolean
        showPopupMessage: boolean
        popupMessageTitle: string
        popupMessageText: string
    }
}
