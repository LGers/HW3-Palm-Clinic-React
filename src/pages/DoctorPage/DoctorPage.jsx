import './DoctorPage.css'
import {Header} from "./Header/Header";
import PatientsContainer from "./Container/PatientsContainer";
import React from "react";

const DoctorPage = (props) => {

    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <PatientsContainer patients={props.patients}/>
            </div>
         </div>
    );
}

export default DoctorPage;