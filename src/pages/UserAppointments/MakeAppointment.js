import React, {useEffect, useState} from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import {TimeRadioInput} from "../../components/TimeRadioInput/TimeRadioInput";
import {TimeSlots} from "../../components/TimeSlots/TimeSlots";
import {Title} from "../../components/Title/Title";
import {AppointmentStep} from "../../components/MakeAppointment/AppointmentStep";
import {AppointmentContainer} from "../../components/MakeAppointment/AppointmentContainer";
import {Formik, Form} from "formik";
import {AppointmentSelect} from "./MakeAppointmentSelects";
import {Breadcrumbs} from "../test/Components/Breadcrumbs";
import {CABINET_PAGE_PATH} from "../../constants/path";
import {Link, useHistory} from "react-router-dom";
import {ChevronRight} from "react-feather";
import {Flex} from "../../components/Flex/Flex";
import {Calendar} from "../../components/Calendar/Calendar";
import moment from "moment";
import {
    StyledAppointmentField,
    StyledAppointmentLabel
} from "./MakeAppointmentSelectsStyles";
import {appointmentValidationSchema} from "../../validations/appointmentValidation";
import {useDispatch, useSelector} from "react-redux";
import {selectDate} from "../../store/userSlice";
import {PopupMessage} from "../../components/PopupMessage/PopupMessage";
import {createAppointment, getOccupations} from "../../api/api";


const MakeAppointment = (props) => {
    const token = localStorage.getItem('access_token')

    const initialState = {
        isStepOneCompleted: false,
        occupation: false,
        doctor: false,
        reasonForVisit: '',
    }
    const [state, setState] = useState(initialState)
    const dispatch = useDispatch()
    const make_appointment = useSelector(state => state.user.make_appointment)
    const occupationOptions = make_appointment.occupations

    const doctorOptions = make_appointment.doctors.map(doctor => {
        return {value: doctor.id, label: doctor.first_name + ' ' + doctor.last_name}
    })

    useEffect(() => {
        getOccupations(token, dispatch)
    }, [])

    const [date, setDate] = useState(moment())
    const today = moment()

    const history = useHistory();

    function handleClick(values) {
        createAppointment(values, token, dispatch, history)
        // history.push("/");
    }

    const handleSetDate = () => {
        alert('setDay')
    }
    const handleChangeTime = (date) => {
        dispatch(selectDate({date}))
    }
    const Times = () => {
        const tempArray = []
        make_appointment.times.map(time => {
            tempArray.push(moment(time).format('HH'))
        })

        const timesArray = []
        for (let i = 8; i < 21; i++) {
            const obj = Object()
            obj.id = 'hour' + i
            const formatHour = i < 10 ? '0' + i : i
            obj.time = moment(make_appointment.date).startOf('day').add(i, 'hours').format()

            tempArray.includes(formatHour.toString())
                ? obj.isAvailable = false
                : obj.isAvailable = true
            timesArray.push(obj)
        }

        const times = timesArray.map(time =>
            <TimeRadioInput
                key={time.id}
                radioId={moment(time.time).toISOString()}
                time={moment(time.time).format('HH:OO a')}
                name={'time'}
                disabled={time.isAvailable}
                isStepOneFull={state.isStepOneCompleted}
                onChange={() => handleChangeTime(time.time)}
            />
        )

        return (
            <>
                {times}
            </>
        )
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

                            <AppointmentContainer>
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
                                        value={date}
                                        onClick={() => {
                                            handleSetDate()
                                        }}
                                        onChange={setDate}
                                        isStepOneCompleted={state.isStepOneCompleted}
                                        today={today}
                                    />
                                </div>

                                <div>
                                    <AppointmentStep><span>3</span>Select an available timeslot</AppointmentStep>

                                    <TimeSlots>
                                        <Times/>
                                    </TimeSlots>
                                </div>

                                <button type="submit"
                                        className="sign-button sign-button_style">Submit
                                </button>


                            </AppointmentContainer>
                        </Form>
                    </Formik>
                    {make_appointment.errorMessage ? <PopupMessage isError={make_appointment.errorMessage} /> : null}
                </UsersContent>
            </Content>
        </Wrapper>
    )
}

export default MakeAppointment;