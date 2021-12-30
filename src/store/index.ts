import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { configureStore } from "@reduxjs/toolkit";
import { rootSagas } from "./rootSaga"
import createSagaMiddleware from "redux-saga";
import authUserReducer from "./auth/authSlice"
import appointmentsReducer from "./appointments/appointmentsSlice";
import createAppointmentReducer from "./createAppointment/createAppointmentSlice";
import resolutionsReducer from "./resolutions/resolutionsSlice";
import profileReducer from "./profile/profileSlice";

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        authUser: authUserReducer,
        appointments: appointmentsReducer,
        resolutions: resolutionsReducer,
        createAppointment: createAppointmentReducer,
        profile: profileReducer,
    },
    middleware: [sagaMiddleware, routerMiddleware(history)]
})

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch