import '../DoctorPage.css'

const PatientSearch = () => {

    return <div className="search">
        <p className="content-title">My Patients</p>
        <div className="search__search-block">
            <button className="search-button search-button__search"/>
            <input className="input-search" type="text" placeholder="Search"/>
                <button className="search-button search-button__filter"/>
                <p className="search__sort-by-label">Sort by:</p>
                <select className="search__sort-select" name="sort-by">
                    <option value="byDate">Date</option>
                    <option value="byName">Name</option>
                </select>

        </div>
    </div>
}

export default PatientSearch