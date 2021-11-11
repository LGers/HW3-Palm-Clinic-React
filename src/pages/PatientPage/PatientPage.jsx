import '../DoctorPage/DoctorPage.css'
import {Header} from "./Header/Header";
import PatientPageContainer from "./Container/PatientPageContainer";
import React from "react";

const PatientPage = (props) => {

    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <PatientPageContainer patients={props.doctors}/>
            </div>
        </div>
    );
}

export default PatientPage;