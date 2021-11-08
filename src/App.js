import React, {useState} from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {patientsFake} from "./patientsFake";
import DoctorPage from "./Components/DoctorPage/DoctorPage";
import SignPage from "./Components/LoginPage/SignPage";
import PatientPage from "./Components/PatientPage/PatientPage";

const doctorsFake = [
    {
        "avatar": "http://placeimg.com/640/480/abstract",
        "firstName": "Bridgette",
        "lastName": "Wisoky",
        "profession": "Therapist",
        "description": "Mollitia ex qui qui deleniti.\nEt accusamus doloribus laboriosam vitae.\nMaxime placeat repudiandae.",
        "time": 1637840844,
        "id": "4"
    },
    {
        "avatar": "http://placeimg.com/640/480/abstract",
        "firstName": "Will",
        "lastName": "Hilll",
        "profession": "Therapist",
        "description": "Nulla debitis quia dignissimos veritatis facere. Minus iure aut aut facere incidunt quod minus. Excepturi est quo mollitia consequatur sequi corrupti magnam incidunt nesciunt. Et nesciunt est sed laudantium sed enim. Corrupti vel ullam qui saepe sit perspiciatis commodi ipsum. Est culpa nesciunt occaecati at id ut incidunt.\n \rAmet recusandae in eveniet quia in quas aut atque quia. Necessitatibus voluptas eum et pariatur quas nihil quod et voluptas. Qui voluptas nulla voluptates quos at.\n \rEt eius deserunt similique sit est iure. Et rerum modi quia consequatur voluptatem aspernatur. Necessitatibus adipisci et facilis molestias error sapiente minima. Tempora et aliquam id libero.",
        "time": 1635840784,
        "id": "5"
    },
]

function App() {
    const initialState = {
        isAuth: true,
        signFormShowPassword:false,
        signFormShowConfirmPassword:false
    }

    const [state, setState] = useState(initialState)
    console.log(state)
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

                    </Switch>
        </Router>
    );
}

export default App;
