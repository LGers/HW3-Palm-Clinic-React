import React, {useState} from "react";
import {Container} from "../../components/Container";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper";
import {UsersContainer} from "../../components/UsersContainer";
import {TimeRadioInput} from "../../components/TimeRadioInput/TimeRadioInput";
import {TimeSlots} from "../../components/TimeSlots/TimeSlots";
import {Title} from "../../components/Title";
import {AppointmentStep} from "../../components/MakeAppointment/AppointmentStep";
import {AppointmentContainer} from "../../components/MakeAppointment/AppointmentContainer";
import {TextNormal} from "../../components/TextNormal";
import {AppointmentSelect} from "../../components/MakeAppointment/AppointmentSelect";
import {AppointmentInput} from "../../components/MakeAppointment/AppointmentInput";
import Calendar from "react-calendar";
import './palm_clinic_calendar.css'
import {SignInButtonText} from "../../constants/dictionary";


const _MakeAppointment_without_Formik = (props) => {
    const formatDate = (date) => date.toDateString()[0]
    const [date, setDate] = useState(new Date());

    return (
        <Wrapper>
            <Container>

                <Header
                    name={props.name}
                    profession={props.profession}
                    avatar={props.avatar}
                />

                <UsersContainer patients={props.doctors}>

                    <div>Doctors > Make an appointment</div>
                    {/*//breadcrumbs*/}

                    <Title>Make an appointment</Title>
                    <AppointmentContainer>

                        <div>
                            <AppointmentStep>
                                <span>1</span>Select a doctor and define the reason of your visit
                            </AppointmentStep>

                            <TextNormal>Occupation</TextNormal>

                            <AppointmentSelect name={'selectOccupation'}>
                                <option value="value1">Therapist</option>
                                <option value="value2">Dent</option>
                            </AppointmentSelect>

                            <TextNormal>Doctor's name</TextNormal>

                            <AppointmentSelect name={'selectDoctor'}>
                                <option value="doctor1">John Milton</option>
                                <option value="doctor2">Miranda Nelson</option>
                            </AppointmentSelect>

                            <AppointmentInput>
                                <label htmlFor={'reasonVisit'}>Reason for visit</label>
                                <input id={'reasonVisit'} placeholder={'Reason for visit'}/>
                            </AppointmentInput>

                            <AppointmentInput>
                                <label htmlFor={'note'}>Reason for visit</label>
                                <input id={'note'} placeholder={'Leave a note if needed'}/>
                            </AppointmentInput>

                        </div>

                        <div>
                            <AppointmentStep><span>2</span>Chose a day for an appointment</AppointmentStep>
                            <Calendar
                                onChange={setDate}
                                value={date}
                                locale={'en-EN'}
                                dateFormat="h:mm aa"
                                formatShortWeekday={(locale, date) => formatDate(date)}
                            />
                        </div>

                        <div>
                            <AppointmentStep><span>3</span>Select an available timeslot</AppointmentStep>

                            <TimeSlots>
                                <TimeRadioInput checkboxId={"12am"} time={'12:00 am'} name={'time'}/>
                                <TimeRadioInput checkboxId={"1pm"} time={'1:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"2pm"} time={'2:00 pm'} name={'time'}
                                                disabled={true}/>
                                <TimeRadioInput checkboxId={"3pm"} time={'3:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"4pm"} time={'4:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"5pm"} time={'5:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"6pm"} time={'6:00 pm'} name={'time'}
                                                disabled={true}/>
                                <TimeRadioInput checkboxId={"7pm"} time={'7:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"8pm"} time={'8:00 pm'} name={'time'}/>
                                <TimeRadioInput checkboxId={"9pm"} time={'9:00 pm'} name={'time'}/>
                            </TimeSlots>
                        </div>

                        <button type="submit" className="sign-button sign-button_style">{SignInButtonText}</button>


                    </AppointmentContainer>
                </UsersContainer>
            </Container>
        </Wrapper>
    )
}

export default _MakeAppointment_without_Formik;