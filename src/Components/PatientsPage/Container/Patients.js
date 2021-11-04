import React from 'react';
import PatientCard from "./PatientCard/PatientsCard";

const Patients = ({state}, ...props) => {
    const Patients = state.map(patient =><PatientCard key={patient.id} patientData={patient}/>)
    return (
        <div className="patients-content">
            {/*<PatientCard patientData={state[0]}/>*/}
            {Patients}
        </div>
    );
};
export default Patients

