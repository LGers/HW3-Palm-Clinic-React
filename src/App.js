import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DoctorPage from "./pages/DoctorPage/DoctorPage";
import SignPage from "./pages/LoginPage/SignPage";
import PatientPage from "./pages/PatientPage/PatientPage";
import {patientsFake} from "./constants/patientsFake";
import {doctorsFake} from "./constants/doctorsFake";
import {
    PROPS_HEADER_DOCTOR_PROFESSION,
    PROPS_HEADER_DOCTOR_NAME,
    PROPS_HEADER_DOCTOR_AVATAR,
} from "./constants/constants";
import {GlobalStyles} from "./components/GlobalStyles";
import {
    APPOINTMENT_PAGE_PATH,
    MAIN_PAGE_PATH,
    PATIENT_PAGE_PATH,
    RESTORE_PASSWORD_PATH,
    RESTORE_PASSWORD_SENT_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH
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
                        ? <DoctorPage
                            patients={patientsFake}
                            name={PROPS_HEADER_DOCTOR_NAME}
                            profession={PROPS_HEADER_DOCTOR_PROFESSION}
                            avatar={PROPS_HEADER_DOCTOR_AVATAR}
                        />
                        : <SignPage link={SIGN_UP_PATH}/>}
                </Route>

                <Route path={PATIENT_PAGE_PATH}>
                    <PatientPage
                        doctors={doctorsFake}
                    />
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
