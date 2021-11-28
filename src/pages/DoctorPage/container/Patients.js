import React from 'react';
import {DoctorCard} from "../../PatientPage/container/DoctorCard/DoctorCard";
import {UsersGrid} from "../../../components/UsersGrid/UsersGrid";

const Doctors = ({state}, ...props) => {
    const Patients = state.map(patient => <DoctorCard key={patient.id} doctorData={patient}/>)
    return (
        <UsersGrid>
            {Patients}
        </UsersGrid>
    );
};
export default Doctors

