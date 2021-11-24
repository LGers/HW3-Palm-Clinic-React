import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DoctorPage from "./pages/doctorPage/DoctorPage";
import SignPage from "./pages/loginPage/SignPage";
import PatientPage from "./pages/patientPage/PatientPage";
import {patientsFake} from "./constants/patientsFake";
import {doctorsFake} from "./constants/doctorsFake";
import {
    PROPS_HEADER_DOCTOR_PROFESSION,
    PROPS_HEADER_DOCTOR_NAME,
    PROPS_HEADER_DOCTOR_AVATAR,
    PROPS_HEADER_PATIENT_PROFESSION,
    PROPS_HEADER_PATIENT_AVATAR,
    PROPS_HEADER_PATIENT_NAME
} from "./constants/constants";
import {GlobalStyles} from "./components/GlobalStyles";
import {
    MAIN_PAGE_PATH,
    PATIENT_PAGE_PATH,
    RESTORE_PASSWORD_PATH,
    RESTORE_PASSWORD_SENT_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH
} from "./constants/path";
import MakeAppointment from "./pages/userAppointments/MakeAppointment";


function App() {
    const initialState = {
        isAuth: true,
        signFormShowPassword: false,
        signFormShowConfirmPassword: false
    }

    const [state, setState] = useState(initialState)

    return (
        <Router>

            <GlobalStyles/>

            <Switch>
                <Route path={SIGN_UP_PATH}>
                    <SignPage link={SIGN_UP_PATH}/>
                </Route>

                <Route path={SIGN_IN_PATH}>
                    <SignPage link={SIGN_IN_PATH} state={state} setState={setState}/>
                </Route>

                <Route path={RESTORE_PASSWORD_PATH}>
                    <SignPage link={RESTORE_PASSWORD_PATH}/>
                </Route>

                <Route path={RESTORE_PASSWORD_SENT_PATH}>
                    <SignPage link={RESTORE_PASSWORD_SENT_PATH}/>
                </Route>

                <Route exact path={MAIN_PAGE_PATH}>
                    {state.isAuth
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
                        name={PROPS_HEADER_PATIENT_NAME}
                        profession={PROPS_HEADER_PATIENT_PROFESSION}
                        avatar={PROPS_HEADER_PATIENT_AVATAR}
                    />
                </Route>

                <Route path="/make-appointment">
                    <MakeAppointment
                        name={PROPS_HEADER_PATIENT_NAME}
                        profession={PROPS_HEADER_PATIENT_PROFESSION}
                        avatar={PROPS_HEADER_PATIENT_AVATAR}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
