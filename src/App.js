import React from "react";
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

function App() {
    const initialState = [
        {isAuth: true}
    ]

    const state = initialState
    console.log(state[0].isAuth)

    return (
        <Router>
            {/*<div className="wrapper">*/}
                    <Switch>
                        <Route path="/sign-up">
                            <SignPage link={'/sign-up'}/>
                        </Route>
                        <Route path="/sign-in">
                            <SignPage link={'/sign-in'}/>
                        </Route>
                        <Route path="/restore-password">
                            <SignPage link={'/restore-password'}/>
                        </Route>
                        <Route path="/restore-password-sent">
                            <SignPage link={'/restore-password-sent'}/>
                        </Route>

                        <Route path="/">
                            {state[0].isAuth ? <PatientsPage patients={patientsFake}/> : 'Login Page'}
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
