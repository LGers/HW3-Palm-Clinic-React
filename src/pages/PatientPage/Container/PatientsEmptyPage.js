import React from 'react';

const PatientsEmptyPage = (props) => {
    return (
        <div className="patients-content">
            <div className="content__empty-state-text">
                <div>
                    <img src="/static/img/empty_state.svg" alt="You don't have patients"/>
                        <p>You have no patients yet.</p>
                        <p>To create a patient profile? please contact your administrator.</p>
                </div>
            </div>
        </div>
    );
};
export default PatientsEmptyPage