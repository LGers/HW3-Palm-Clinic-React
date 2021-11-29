import React from "react";
import './doctorCard.css'
import moment from "moment";

export const DoctorCard = ({appointment}) => {
    const momentDate = moment(appointment.visit_date)
    const appointmentDate = momentDate.format('ddd DD MMM, YYYY')
    const appointmentTime = momentDate.format('h a') + ' - ' + momentDate.add(1, 'hour').format('h a')
    return (
        <div className="patient-card">
            <div className="patient-card__info">
                <div className="patient-info__avatar">
                    <img src={appointment.doctor.photo} alt="avatar"/>
                </div>
                <div className="patient-info__name-and-status">
                    <div
                        className="patient-info__name">{appointment.doctor.first_name} {appointment.doctor.last_name}</div>
                    <div className="patient-info__status">
                        <p>{appointment.doctor.specialization_name}</p>
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
                    {/*<p>{appointment.visit_date.toDateString()} 4 pm - 5 pm</p>*/}
                    <p>{appointmentDate} {appointmentTime}</p>
                </div>
                <div className="patient-card__resolutions_description">
                    <div className="patient-card__resolutions-icon">
                        <img src="../../../../static/img/heart-icon.svg" alt="heart"/>
                    </div>
                    <div><p>{appointment.reason}</p></div>
                </div>
            </div>
        </div>
    )
}