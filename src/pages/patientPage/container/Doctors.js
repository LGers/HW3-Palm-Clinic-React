import React from 'react';
import {DoctorCard} from "./DoctorCard/DoctorCard";

const Doctors = ({state}, ...props) => {
    const Patients = state.map(doctor =><DoctorCard key={doctor.id} doctorData={doctor}/>)
    return (
        <div className="patients-content">
            {Patients}
        </div>
    );
};
export default Doctors

