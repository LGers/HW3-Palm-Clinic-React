import PatientPageButtons from "./PatientPageButtons";
import PatientSearch from "./PatientsSearch";
import PatientsEmptyPage from "./PatientsEmptyPage";
import Doctors from "./Doctors";

const PatientPageContainer =({patients}, ...props)=> {
    return <div className="content wrapper__content">
        <PatientPageButtons/>
        <PatientSearch/>
        {patients.length ? <Doctors state={patients}/> :  <PatientsEmptyPage/>}
    </div>
}

export default PatientPageContainer