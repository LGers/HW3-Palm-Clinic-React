import React from 'react';
import {DoctorCard} from "../../PatientPage/Container/DoctorCard/DoctorCard";

const Doctors = ({state}, ...props) => {
    const Patients = state.map(patient =><DoctorCard key={patient.id} doctorData={patient}/>)
    return (
        <div className="patients-content">
            {Patients}
        </div>
    );
};
export default Doctors

