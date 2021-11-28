import React, {useEffect, useState} from "react";
import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {UsersContainer} from "../../components/UsersContainer/UsersContainer";
import {TimeRadioInput} from "../../components/TimeRadioInput/TimeRadioInput";
import {TimeSlots} from "../../components/TimeSlots/TimeSlots";
import {Title} from "../../components/Title/Title";
import {AppointmentStep} from "../../components/MakeAppointment/AppointmentStep";
import {AppointmentContainer} from "../../components/MakeAppointment/AppointmentContainer";
import {Formik, Form} from "formik";
import {AppointmentSelect} from "./MakeAppointmentSelects";
import {Breadcrumbs} from "../test/Components/Breadcrumbs";
import {PATIENT_PAGE_PATH} from "../../constants/path";
import {Link, useHistory} from "react-router-dom";
import {ChevronRight} from "react-feather";
import {Flex} from "../../components/Flex/Flex";
import {Calendar} from "../../components/Calendar/Calendar";
import moment from "moment";
import {
    doctorsOptions,
    occupationOptions,
    StyledAppointmentField,
    StyledAppointmentLabel
} from "./MakeAppointmentSelectsStyles";
import {appointmentValidationSchema} from "../../validations/appointmentValidation";
import axios from "axios";


const MakeAppointment = (props) => {

    const initialUserProfile ={
        first_name: '',
        last_name:'',
        photo: '',
        role_name: 'Patient'
    }

    const [userProfile, setUserProfile] = useState(initialUserProfile)

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                setUserProfile(response.data)
                console.log(response.data)
            })
            .catch(error =>
                console.log(error)
            )
    }, [setUserProfile])


    const [date, setDate] = useState(moment())
    const today = moment()

    const history = useHistory();

    function handleClick() {
        // history.push("/");
    }

    const initialState = {
        isStepOneCompleted: false,
        occupation: false,
        doctor: false,
        reasonForVisit: '',
        // note: '',
        // date: '',
        // time: ''
    }
    const [state, setState] = useState(initialState)

    return (
        <Wrapper>
            <Container>

                <Header userProfile={userProfile}/>

                <UsersContainer>
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

                            setTimeout(() => {
                                setSubmitting(false);
                                handleClick()
                            }, 400);
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
                            <Breadcrumbs>
                                <Link to={PATIENT_PAGE_PATH}>Doctors</Link><ChevronRight/>Make an appointment
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
                                        options={doctorsOptions}
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
                                        onChange={setDate}
                                        isStepOneCompleted={state.isStepOneCompleted}
                                        today={today}
                                    />
                                </div>

                                <div>
                                    <AppointmentStep><span>3</span>Select an available timeslot</AppointmentStep>

                                    <TimeSlots>
                                        <TimeRadioInput radioId={"12am"} time={'12:00 am'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"1pm"} time={'1:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput id={"2pm"} time={'2:00 pm'} name={'time'}
                                                        disabled={true} isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"3pm"} time={'3:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"4pm"} time={'4:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"5pm"} time={'5:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"6pm"} time={'6:00 pm'} name={'time'}
                                                        disabled={true} isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"7pm"} time={'7:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"8pm"} time={'8:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                        <TimeRadioInput radioId={"9pm"} time={'9:00 pm'} name={'time'}
                                                        isStepOneFull={state.isStepOneCompleted}/>
                                    </TimeSlots>
                                </div>

                                <button type="submit"
                                        className="sign-button sign-button_style">Submit
                                </button>
                            </AppointmentContainer>
                        </Form>
                    </Formik>
                </UsersContainer>
            </Container>
        </Wrapper>
    )
}

export default MakeAppointment;