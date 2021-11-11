import React from 'react';


export const Header = (props) => {
    return (
        <header className="header wrapper__header">
            <div className="logo">
                <img src="static/img/logo.png" alt="Logo"/>
            </div>

            <div className="doctor">
                <div className="doctor-name-pos">
                    <p className="doctor__name">Lary Prinston</p>
                    <p className="doctor__position">Patient</p>
                </div>

                <div className='doctor__status'>
                    <img className="doctor__avatar" src="static/img/patient-avatar.jpg" alt="avatar"/>
                    <div className="doctor__status-icon"></div>
                </div>
            </div>
        </header>
    );
};