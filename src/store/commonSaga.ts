import {put} from "redux-saga/effects";
import {setPopupMessage, toggleShowMessage} from "./auth/authSlice";
import {AxiosError} from "axios";

export function* errorMessage(error: AxiosError): Generator {
    yield put(setPopupMessage({
        title: `Error ${error.message}`,
        message: `Error ${error.response?.data}`,
        isSuccess: false
    }))
    yield put(toggleShowMessage())
}