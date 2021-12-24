import {SIGN_IN_PATH, SIGN_UP_PATH} from "./path";

export const restorePasswordTitle = `Restore Password`
export const restorePasswordButtonText = 'Send Reset Link'

export const SignInTitle = `Sign In`
export const SignInButtonText = 'Sign In'

export const SignUpTitle = `Sign Up`
export const SignUpButtonText = 'Sign Up'

export const AUTH_FOOTER = {
    SIGN_IN: {
        FOOTER_TEXT: `Don't have an account`,
        FOOTER_LINK_TEXT: 'Sign Up',
        FOOTER_LINK: SIGN_UP_PATH,

    },
    SIGN_UP: {
        FOOTER_TEXT: 'Already have an account?',
        FOOTER_LINK_TEXT: 'Sign In',
        FOOTER_LINK: SIGN_IN_PATH,
    },
    RESTORE_PASSWORD: {
        FOOTER_TEXT: '',
        FOOTER_LINK_TEXT: '',
        FOOTER_LINK: '',
    },
    RESTORE_PASSWORD_SENT: {
        FOOTER_TEXT: '',
        FOOTER_LINK_TEXT: '',
        FOOTER_LINK: '',
    }
}

const staticImagesUrl = '/static/img/'
export const USER_ICON = `${staticImagesUrl}user-icon.svg`
export const EMAIL_ICON = `${staticImagesUrl}email-icon.svg`
export const PASSWORD_ICON = `${staticImagesUrl}lock-icon.svg`

export const AUTH_FORM = {
    SIGN_IN: {
        TITLE: `Sign In`,
        BUTTON_TEXT: 'Sign In',
        INPUTS: [
            {NAME: 'email', PLACEHOLDER: 'Email', TYPE: 'text', ICON_URL: EMAIL_ICON},
            {NAME: 'password', PLACEHOLDER: 'Password', TYPE: 'password', ICON_URL: PASSWORD_ICON},
        ],
        INITIAL_VALUES: {
            email: '',
            password: '',
        }
    },
    SIGN_UP: {
        TITLE: `Sign Up`,
        BUTTON_TEXT: 'Sign Up',
        INPUTS: [
            {NAME: 'firstName', PLACEHOLDER: 'First Name', TYPE: 'text', ICON_URL: USER_ICON},
            {NAME: 'lastName', PLACEHOLDER: 'Last Name', TYPE: 'text', ICON_URL: USER_ICON},
            {NAME: 'email', PLACEHOLDER: 'Email', TYPE: 'email', ICON_URL: EMAIL_ICON},
            {NAME: 'password', PLACEHOLDER: 'Password', TYPE: 'password', ICON_URL: PASSWORD_ICON},
            {
                NAME: 'confirmPassword',
                PLACEHOLDER: 'Confirm Password',
                TYPE: 'password',
                ICON_URL: PASSWORD_ICON
            },
        ],
        INITIAL_VALUES: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    },
    RESTORE_PASSWORD: {
        TITLE: `Restore Password`,
        BUTTON_TEXT: 'Send Reset Link',
        INPUTS: [
            {NAME: 'email', PLACEHOLDER: 'Email', TYPE: 'email', ICON_URL: EMAIL_ICON},
        ],
        INITIAL_VALUES: {
            email: '',
        },
    },
    RESTORE_PASSWORD_SENT: {
        TITLE: `Restore Password`,
        BUTTON_TEXT: '',
        INPUTS: [],
        INITIAL_VALUES: {}
    },
}

export const RESTORE_PASSWORD = {
    TEXT: `Please use your email address, and we'll send you the link to reset your password`,
    SEND_TEXT_BEFORE: `An email has been sent to `,
    SEND_TEXT_AFTER: `. Check your inbox, and click the reset link provided`,
}

export const CHANGE_PASSWORD = {
    TITLE: `Change password`,
    INPUTS: [
        {NAME: 'oldPassword', PLACEHOLDER: 'Old password', TYPE: 'password', ICON_URL: PASSWORD_ICON, LABEL_TEXT: 'Old password'},
        {NAME: 'newPassword', PLACEHOLDER: 'New password', TYPE: 'password', ICON_URL: PASSWORD_ICON, LABEL_TEXT: 'New password'},
    ],
    INITIAL_VALUES: {
        oldPassword: '',
        newPassword: '',
    },
    BUTTON_TEXT:{
        SAVE: 'Save',
        CANCEL: 'Cancel',
    },
}

