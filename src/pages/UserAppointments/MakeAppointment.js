import React, {useState} from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import {TimeSlots} from "../../components/TimeSlots/TimeSlots";
import {Title} from "../../components/Title/Title";
import {AppointmentStep} from "../../components/MakeAppointment/AppointmentStep";
import {AppointmentContent} from "../../components/MakeAppointment/AppointmentContent";
import {Formik, Form} from "formik";
import {AppointmentSelect} from "./MakeAppointmentSelects";
import {Breadcrumbs} from "../test/Components/Breadcrumbs";
import {CABINET_PAGE_PATH} from "../../constants/path";
import {Link} from "react-router-dom";
import {ChevronRight} from "react-feather";
import {Flex} from "../../components/Flex/Flex";
import {Calendar} from "../../components/Calendar/Calendar";
import moment from "moment";
import {
    StyledAppointmentField,
    StyledAppointmentLabel
} from "./MakeAppointmentSelectsStyles";
import {appointmentValidationSchema} from "../../_backup/validations/appointmentValidation";
import {useDispatch, useSelector} from "react-redux";
import {PopupMessage} from "../../components/PopupMessage/PopupMessage";
import {createAppointment, selectDate} from "../../store/makeAppointmentSlice";
import {AppointmentTimes} from "./AppointmentTimes";


const MakeAppointment = () => {
    const initialState = {
        isStepOneCompleted: false,
        occupation: false,
        doctor: false,
        reasonForVisit: '',
    }
    const [state, setState] = useState(initialState)
    const dispatch = useDispatch()
    const make_appointment = useSelector(state => state.makeAppointment.appointment)
    const occupationOptions = make_appointment.occupations.map(occupation => {
        return {value: occupation.id, label: occupation.specialization_name}
    })

    const doctorOptions = make_appointment.doctors.map(doctor => {
        return {value: doctor.id, label: doctor.first_name + ' ' + doctor.last_name}
    })

    const today = moment()

    const handleDateChange =(day) => {
        dispatch(selectDate({day, make_appointment}))
    }

    function handleClick(values) {
        dispatch(createAppointment(values))
    }

    return (
        <Wrapper>
            <Content>
                <Header/>

                <UsersContent>
                    <Formik
                        initialValues={
                            {
                                occupation: '',
                                doctor: '',
                                reasonForVisit: '',
                                note: '',
                                date: '',
                                time: '',
                            }
                        }

                        validationSchema={appointmentValidationSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(false);
                            handleClick(values)
                        }}
                    >
                        <Form>
                            <Breadcrumbs>
                                <Link to={CABINET_PAGE_PATH}>Doctors</Link><ChevronRight/>Make an appointment
                            </Breadcrumbs>

                            <Title>Make an appointment</Title>

                            <AppointmentContent>
                                <Flex direction={'column'}>
                                    <AppointmentStep>
                                        <span>1</span>Select a doctor and define the reason of your visit
                                    </AppointmentStep>

                                    <StyledAppointmentLabel htmlFor={'occupation'}>Occupation</StyledAppointmentLabel>
                                    <AppointmentSelect
                                        options={occupationOptions}
                                        name="occupation"
                                        selectId="occupation"
                                        state={state}
                                        setState={setState}
                                    />

                                    <StyledAppointmentLabel htmlFor={'doctor'}>Doctor's name</StyledAppointmentLabel>
                                    <AppointmentSelect
                                        options={doctorOptions}
                                        name="doctor"
                                        selectId="doctor"
                                        state={state}
                                        setState={setState}
                                    />

                                    <StyledAppointmentLabel htmlFor={'reasonForVisit'}>Reason for
                                        visit</StyledAppointmentLabel>
                                    <StyledAppointmentField
                                        name={'reasonForVisit'}
                                        id={'reasonForVisit'}
                                        placeholder={'Reason for visit'}
                                        type={'text'}
                                    />


                                    <StyledAppointmentLabel htmlFor={'note'}>Note</StyledAppointmentLabel>
                                    <StyledAppointmentField
                                        name={'note'}
                                        id={'note'}
                                        placeholder={'Leave a note if needed'}
                                        type={'text'}
                                    />
                                </Flex>

                                <div>
                                    <AppointmentStep><span>2</span>Chose a day for an appointment</AppointmentStep>
                                    <Calendar
                                        onChange={(day)=>handleDateChange(day)}
                                        isStepOneCompleted={state.isStepOneCompleted}
                                        today={today}
                                    />
                                </div>

                                <div>
                                    <AppointmentStep><span>3</span>Select an available timeslot</AppointmentStep>

                                    <TimeSlots>
                                        <AppointmentTimes isStepOneCompleted={state.isStepOneCompleted}/>
                                    </TimeSlots>
                                </div>

                                <button type="submit"
                                        className="sign-button sign-button_style">Submit
                                </button>


                            </AppointmentContent>
                        </Form>
                    </Formik>
                    {make_appointment.errorMessage ? <PopupMessage isError={make_appointment.errorMessage} /> : null}
                </UsersContent>
            </Content>
        </Wrapper>
    )
}

export default MakeAppointment;