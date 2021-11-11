import React from "react";
import './patientCard.css'

const PatientCard = ({patientData}) => {
    let status = ''
    let statusColor = 'patient-info__status_canceled'

    switch (patientData.status) {
        case "Cancelled": {
            status = 'Appointment is cancelled'
            statusColor = 'patient-info__status_canceled'
            break
        }
        case "Confirmed" : {
            status = 'Appointment is confirmed'
            statusColor = 'patient-info__status_confirmed'
            break
        }
        default: {
            status = 'Waiting for confirmation'
            statusColor = 'patient-info__status_waiting'
            break
        }
    }
    return (
        <div className="patient-card">
            <div className="patient-card__info">
                <div className="patient-info__avatar">
                    <img src={patientData.avatar} alt="avatar"/>
                </div>
                <div className="patient-info__name-and-status">
                    <div className="patient-info__name">{patientData.firstName} {patientData.lastName}</div>
                    <div className="patient-info__status">
                        <div className= {statusColor}/>
                        <p>{status}</p>
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
                    <p>{(new Date(patientData.time*1000)).toDateString()} 4 pm - 5 pm</p>
                </div>
                <div className="patient-card__resolutions_description">
                    <div className="patient-card__resolutions-icon">
                        <img src="../../../../static/img/description.svg" alt="description"/>
                    </div>
                    <div><p>{patientData.description}</p></div>
                </div>
            </div>
        </div>
    )
}

export default PatientCard