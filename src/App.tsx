import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import {history} from "./store";
import SignPage from "./pages/LoginPage/SignPage";
import UserCabinetPage from "./pages/UserCabinetPage/UserCabinetPage";
import {GlobalStyles} from "./components/GlobalStyles";
import {
    MAIN_PAGE_PATH,
    SIGN_IN_PATH, SIGN_UP_PATH,
    RESTORE_PASSWORD_PATH, RESTORE_PASSWORD_SENT_PATH,
    MAKE_APPOINTMENT_PAGE_PATH, CABINET_PAGE_PATH
} from "./constants/path";
import MakeAppointment from "./pages/UserAppointments/MakeAppointment";
import {SagaPage} from "./pages/test/SagaPage/SagaPage";
import {Counter} from "./pages/test/Counter/Counter";
import {ConnectedRouter} from "connected-react-router";


const App: React.FC  = () => {

    return (
        <ConnectedRouter history={history}>

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
                    {0
                        ? <UserCabinetPage/>
                        : <SignPage link={SIGN_IN_PATH}/>}
                </Route>

                <Route path={CABINET_PAGE_PATH}>
                    <UserCabinetPage/>
                </Route>

                <Route path={MAKE_APPOINTMENT_PAGE_PATH}>
                    <MakeAppointment
                    />
                </Route>

                <Route path={'/saga-page'}>
                    <SagaPage/>
                </Route>

                <Route path={'/counter'}>
                    <Counter/>
                </Route>

                <Route path={'/saga-counter-test'}>
                    <Counter
                        onIncrement={'INCREMENT'}
                        onDecrement={'DECREMENT'}
                        onIncrementAsync={'INCREMENT_ASYNC'}
                    />
                </Route>
            </Switch>
        </ConnectedRouter>
    );
}

export default App;
