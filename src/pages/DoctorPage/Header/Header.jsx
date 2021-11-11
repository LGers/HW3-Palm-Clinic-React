import React from 'react';


export const Header = (props) => {
    return (
        <header className="header wrapper__header">
            <div className="logo">
                <img src="static/img/logo.png" alt="Logo"/>
            </div>

            <div className="doctor">
                <div className="doctor-name-pos">
                    <p className="doctor__name">Miranda Nelson</p>
                    <p className="doctor__position">Doctor</p>
                </div>

                <div className='doctor__status'>
                    <img className="doctor__avatar" src="static/img/avatar.jpg" alt="avatar"/>
                    <div className="doctor__status-icon"></div>
                </div>
            </div>
        </header>
    );
};