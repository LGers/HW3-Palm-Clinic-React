import PatientsButtons from "./PatientsButtons";
import PatientSearch from "./PatientsSearch";
import PatientsEmptyPage from "./PatientsEmptyPage";
import Patients from "./Patients";

const PatientsContainer =({patients}, ...props)=> {
    return <div className="content wrapper__content">
        <PatientsButtons/>
        <PatientSearch/>
        {patients.length ? <Patients state={patients}/> :  <PatientsEmptyPage/>}
    </div>
}

export default PatientsContainer