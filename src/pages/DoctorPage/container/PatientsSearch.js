import '../DoctorPage.css'
import {Button} from "../../../components/Button/Button";
import {Plus} from "react-feather";
import {useHistory} from "react-router-dom";
import {APPOINTMENT_PAGE_PATH} from "../../../constants/path";

const PatientSearch = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(APPOINTMENT_PAGE_PATH);
    }
    return <div className="search">
        <p className="content-title">My Appointment</p>
        <div className="search__search-block">
                <button className="search-button search-button__filter"/>
                <p className="search__sort-by-label">Show:</p>
                <select className="search__sort-select" name="sort-by">
                    <option value="upcoming">Upcoming</option>
                    <option value="noSort">No sort</option>
                </select>
            <Button onClick={handleClick} primary leftIcon><Plus/>Create an appointment</Button>
        </div>
    </div>
}

export default PatientSearch