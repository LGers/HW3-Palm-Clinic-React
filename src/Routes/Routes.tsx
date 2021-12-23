import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {history, RootState} from "../store";
import Cabinet from "../pages/Cabinet/Cabinet";
import {GlobalStyles} from "../components/GlobalStyles";
import {
    MAIN_PAGE_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH,
    RESTORE_PASSWORD_PATH,
    CREATE_APPOINTMENT_PAGE_PATH,
    CABINET_APPOINTMENTS_PATH,
    CABINET_RESOLUTION_PATH,
    CABINET_PATIENTS_PATH,
    CABINET_PROFILE_PATH
} from "../constants/path";
import CreateAppointment from "../pages/CreateAppointment/CreateAppointment";
import {ConnectedRouter} from "connected-react-router";
import {Error404Page} from "../pages/Error404/Error404Page";
import AuthPage from "../pages/Auth/AuthPage";
import AuthRestorePassword from "../pages/Auth/AuthRestorePassword";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProfile} from "../store/auth/authSlice";

export const Routes: React.FC = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state: RootState) => state.authUser.data)

//todo create full private routing
    useEffect(() => {
        if (!userData.id) {
            {
                dispatch(fetchUserProfile())
            }
        } else {
            if (history.location.pathname === SIGN_IN_PATH) {
                history.push(CABINET_APPOINTMENTS_PATH)
            }
        }
    })

    return (
        <ConnectedRouter history={history}>
            <GlobalStyles/>

            <Switch>
                <Route path={SIGN_IN_PATH}>
                    <AuthPage link={SIGN_IN_PATH}/>
                </Route>

                <Route path={SIGN_UP_PATH}>
                    <AuthPage link={SIGN_UP_PATH}/>
                </Route>

                <Route path={RESTORE_PASSWORD_PATH}>
                    <AuthRestorePassword link={RESTORE_PASSWORD_PATH}/>
                </Route>

                <Route exact path={MAIN_PAGE_PATH}>
                    <AuthPage link={SIGN_IN_PATH}/>
                </Route>

                <Route path={CABINET_APPOINTMENTS_PATH}>
                    <Cabinet link={CABINET_APPOINTMENTS_PATH}/>
                </Route>

                <Route path={CABINET_RESOLUTION_PATH}>
                    <Cabinet link={CABINET_RESOLUTION_PATH}/>
                </Route>

                <Route path={CABINET_PATIENTS_PATH}>
                    <Cabinet link={CABINET_PATIENTS_PATH}/>
                </Route>

                <Route path={CABINET_PROFILE_PATH}>
                    <Cabinet link={CABINET_PROFILE_PATH}/>
                </Route>

                <Route path={CREATE_APPOINTMENT_PAGE_PATH}>
                    <CreateAppointment
                    />
                </Route>

                <Route path='*'>
                    <Error404Page/>
                </Route>
            </Switch>
        </ConnectedRouter>
    );
}

export default Routes;
