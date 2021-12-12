import {connectRouter, routerMiddleware} from 'connected-react-router'
import { createBrowserHistory } from 'history'
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import currentUserReducer from "./currentUserSlice"
import appointmentsReducer from "./appointmentsSlice";
import makeAppointmentReducer from "./makeAppointmentSlice";
import sortByReducer from "./sortBySlice";
import counterReducer from "../pages/test/Counter/counterSlice";
import createSagaMiddleware from "redux-saga";
import {rootSagas} from "../saga"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        user: userReducer,
        currentLogonUser: currentUserReducer,
        appointments: appointmentsReducer,
        makeAppointment: makeAppointmentReducer,
        sortBy: sortByReducer,
        counter: counterReducer
    },
    middleware: [sagaMiddleware, routerMiddleware(history)]
})

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch