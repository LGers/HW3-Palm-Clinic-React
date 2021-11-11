import React, {useState} from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {patientsFake} from "./constants/patientsFake";
import DoctorPage from "./pages/DoctorPage/DoctorPage";
import SignPage from "./pages/LoginPage/SignPage";
import PatientPage from "./pages/PatientPage/PatientPage";
import {TestButtonPage} from "./pages/Test/TestButtonPage";
import {doctorsFake} from "./constants/doctorsFake";



function App() {
    const initialState = {
        isAuth: true,
        signFormShowPassword:false,
        signFormShowConfirmPassword:false
    }

    const [state, setState] = useState(initialState)

    return (
        <Router>
            <Switch>
                <Route path="/sign-up">
                    <SignPage link={'/sign-up'}/>
                </Route>

                <Route path="/sign-in">
                    <SignPage link={'/sign-in'} state={state} setState={setState}/>
                </Route>

                <Route path="/restore-password">
                    <SignPage link={'/restore-password'}/>
                </Route>

                <Route path="/restore-password-sent">
                    <SignPage link={'/restore-password-sent'}/>
                </Route>

                <Route exact path="/">
                    {state.isAuth ? <DoctorPage patients={patientsFake}/> : <SignPage link={'/sign-up'}/>}
                </Route>

                <Route path="/patient-page">
                    <PatientPage doctors={doctorsFake}/>
                </Route>

                <Route path="/button">
                    <TestButtonPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
