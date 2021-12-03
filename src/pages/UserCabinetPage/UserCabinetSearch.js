const UserCabinetSearch = () => {

    return <div className="search">
        <p className="content-title">My Appointments</p>
        <div className="search__search-block">
                <p className="search__sort-by-label">Show:</p>
                <select className="search__sort-select" name="sort-by">
                    <option value="byDate">upcoming</option>
                    <option value="byName">Name</option>
                </select>
            <button className="button button__size button_primary button_leftPlus hiddenOnMobileAndTablet">Create an appointment</button>
        </div>
    </div>
}

export default UserCabinetSearch