import React from 'react';
import {DoctorCard} from "../../patientPage/container/DoctorCard/DoctorCard";
import {UsersGrid} from "../../../components/UsersGrid";

const Doctors = ({state}, ...props) => {
    const Patients = state.map(patient => <DoctorCard key={patient.id} doctorData={patient}/>)
    return (
        <UsersGrid>
            {Patients}
        </UsersGrid>
    );
};
export default Doctors

