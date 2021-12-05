import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignPage from "./pages/LoginPage/SignPage";
import UserCabinetPage from "./pages/UserCabinetPage/UserCabinetPage";
import {GlobalStyles} from "./components/GlobalStyles";
import {
    MAIN_PAGE_PATH,
    SIGN_IN_PATH, SIGN_UP_PATH,
    RESTORE_PASSWORD_PATH, RESTORE_PASSWORD_SENT_PATH,
    APPOINTMENT_PAGE_PATH, CABINET_PAGE_PATH
} from "./constants/path";
import MakeAppointment from "./pages/UserAppointments/MakeAppointment";


function App() {

    return (
        <Router>

            <GlobalStyles/>

            <Switch>
                <Route path={SIGN_UP_PATH}>
                    <SignPage link={SIGN_UP_PATH}/>
                </Route>

                <Route path={SIGN_IN_PATH}>
                    <SignPage link={SIGN_IN_PATH}/>
                </Route>

                <Route path={RESTORE_PASSWORD_PATH}>
                    <SignPage link={RESTORE_PASSWORD_PATH}/>
                </Route>

                <Route path={RESTORE_PASSWORD_SENT_PATH}>
                    <SignPage link={RESTORE_PASSWORD_SENT_PATH}/>
                </Route>

                <Route exact path={MAIN_PAGE_PATH}>
                    {1
                        ? <UserCabinetPage/>
                        : <SignPage link={SIGN_UP_PATH}/>}
                </Route>

                <Route path={CABINET_PAGE_PATH}>
                    <UserCabinetPage/>
                </Route>

                <Route path={APPOINTMENT_PAGE_PATH}>
                    <MakeAppointment
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
