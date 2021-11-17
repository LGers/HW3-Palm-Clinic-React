import React from "react";
import './doctorCard.css'

export const DoctorCard = ({doctorData}) => {

    return (
        <div className="patient-card">
            <div className="patient-card__info">
                <div className="patient-info__avatar">
                    <img src={doctorData.avatar} alt="avatar"/>
                </div>
                <div className="patient-info__name-and-status">
                    <div className="patient-info__name">{doctorData.firstName} {doctorData.lastName}</div>
                    <div className="patient-info__status">
                        <p>{doctorData.profession}</p>
                    </div>
                </div>
                <button className="patient-info__manage-btn"/>
                <div className="patient-info__edit-select">
                    <select name="edit-patient">
                        <option value="create-resolution">Create a resolution</option>
                        <option value="edit-appointment">Edit an appointment</option>
                        <option className="patient-info__edit-select_delete" value="delete-patient">Delete</option>
                    </select>
                </div>
            </div>
            <div className="patient-card__resolutions">
                <div className="patient-card__resolutions_time">
                    <div className="patient-card__resolutions-icon">
                        <img src="../../../../static/img/time.svg" alt="time"/>
                    </div>
                    <p>{(new Date(doctorData.time*1000)).toDateString()} 4 pm - 5 pm</p>
                </div>
                <div className="patient-card__resolutions_description">
                    <div className="patient-card__resolutions-icon">
                        <img src="../../../../static/img/heart-icon.svg" alt="heart"/>
                    </div>
                    <div><p>{doctorData.description}</p></div>
                </div>
            </div>
        </div>
    )
}