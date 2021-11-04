import {fakeDataMoki} from "./fakeDataMoki.js";

const patients = fakeDataMoki

console.log(Date())
const patientCardTemplate = (patientData) => {
    let status =''
    if (patientData.status) {status = 'Appointment is confirmed'} else {
        status = 'Appointment is cancelled'
    }
    return `
<div class="patient-card__info">
    <div class="patient-info__avatar">
        <img src="${patientData.avatar}" alt="avatar">
    </div>
    <div class="patient-info__name-and-status">
        <div class="patient-info__name">${patientData.firstName} ${patientData.lastName}</div>
        <div class="patient-info__status">
            <div class="patient-info__status_confirm"></div>
            <p>${status}</p>
        </div>
    </div>
    <button class="patient-info__manage-btn"></button>
    <div class="patient-info__edit-select">
        <select name="edit-patient">
            <option value="create-resolution">Create a resolution</option>
            <option value="edit-appointment">Edit an appointment</option>
            <option class="patient-info__edit-select_delete" value="delete-patient">Delete</option>
        </select>
    </div>
</div>
<div class="patient-card__resolutions">
    <div class="patient-card__resolutions_time">
        <div class="patient-card__resolutions-icon">
            <img src="img/time.svg" alt="time">
        </div>
        <p>${patientData.time}</p>
    </div>
    <div class="patient-card__resolutions_description">
        <div class="patient-card__resolutions-icon">
            <img src="img/description.svg" alt="description">
        </div>
        <p>${patientData.description}</p>
    </div>
</div>
`
}

const patientsContent = document.querySelector('.patients-content')

patientsContent.addEventListener('click', ()=>console.log('click'))

const addPatientCard =(patientData) => {
    const patientCard = document.createElement('div')
    patientCard.classList = 'patient-card'
    patientCard.innerHTML = patientCardTemplate(patientData)
    patientsContent.append(patientCard)
    
    
}

for (let i=0;i<10;i++) {
    addPatientCard(patients[i])
}