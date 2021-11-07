import React, {useState} from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {patientsFake} from "./patientsFake";
import PatientsPage from "./Components/PatientsPage/PatientsPage";
import SignPage from "./Components/LoginPage/SignPage";
import SignPageTest from "./Components/Test/SignPageTest";
import {FormikTest} from "./Components/Test/FormikTest";

function App() {
    const initialState = [
        {isAuth: true},
        {signFormShowPassword:false},
        {signFormShowConfirmPassword:false}
    ]

    const [state, setState] = useState(initialState)

    return (
        <Router>
            {/*<div className="wrapper">*/}
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
                            {/*{state.isAuth ? <PatientsPage patients={patientsFake}/> : 'Login Page'}*/}
                            {true ? <PatientsPage patients={patientsFake}/> : 'Login Page'}
                        </Route>

                        <Route path="/formik">
                            <FormikTest link={'/formik'}/>
                        </Route>



                    </Switch>
            {/*</div>*/}

            <>
                {/*{state[0].isAuth ? <PatientsPage patients={patientsFake}/> : 'Login Page'}*/}
            </>
        </Router>
    );
}

export default App;
