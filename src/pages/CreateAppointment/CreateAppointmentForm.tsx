import {Form, Formik, FormikValues} from 'formik';
import * as React from 'react';
import {Flex} from '../../components/Flex/Flex';
import {AppointmentContent} from '../../components/MakeAppointment/AppointmentContent';
import {AppointmentStep} from '../../components/MakeAppointment/AppointmentStep';
import {Title} from '../../components/Title/Title';
import {appointmentValidationSchema} from '../../validations/appointment.validation';
import {Breadcrumbs} from '../test/Components/Breadcrumbs';
import {StyledAppointmentField, StyledAppointmentLabel} from './CreateAppointmentSelects.styles';
import {CreateAppointmentSelect} from "./CreateAppointmentSelects";
import {CREATE_APPOINTMENT} from '../../constants/constants';
import {Calendar} from "../../components/Calendar/Calendar";
import {TimeSlots} from "../../components/TimeSlots/TimeSlots";
import {CreateAppointmentTimes} from "./CreateAppointmentTimes";
import moment from "moment";
import {
    createAppointment,
    fetchOccupations,
    fetchTimes,
} from "../../store/createAppointment/createAppointmentSlice";
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {CABINET_APPOINTMENTS_PATH} from '../../constants/path';
import {Link} from 'react-router-dom';
import {ChevronRight} from 'react-feather';
import {Button} from "../../components/Button/Button";


export const CreateAppointmentForm: React.FC = () => {
    const dispatch = useDispatch()
    const [date, setDate] = useState(moment())

    useEffect(() => {
        dispatch(fetchOccupations())
    }, [dispatch])

    const newAppointment = useSelector((state: RootState) => state.createAppointment)

    const occupationOptions = newAppointment.occupations.map(occupation => {
        return {value: occupation.id, label: occupation.specialization_name}
    })

    const doctorOptions = newAppointment.doctors.map(doctor => {
        return {value: doctor.id, label: doctor.first_name + ' ' + doctor.last_name}
    })


    const handleDateChange = (day: any, doctorId: string) => {
        setDate(day)
        dispatch(fetchTimes({day, doctorId}))
    }

    function handleClick(values: FormikValues) {
        dispatch(createAppointment(values))
    }

    function handleChange(values: ChangeEvent<any>) {
        console.log('handleChange values', values)
    }


    return (
        <Formik
            initialValues={
                {
                    doctorId: '',
                    reason: '',
                    note: '',
                    date: '',
                }
            }
            // validationSchema={appointmentValidationSchema}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
                handleClick(values)
            }}

        >
            {({
                  values,

              }) => (
                <Form>
                    <Breadcrumbs>
                        <Link to={CABINET_APPOINTMENTS_PATH}>Doctors</Link><ChevronRight/>Make an appointment
                        {newAppointment.isFetching && <span>Loading...</span>}

                    </Breadcrumbs>

                    <Title>Make an appointment</Title>

                    <AppointmentContent>
                        <Flex direction={'column'}>
                            <AppointmentStep>
                                <span>1</span>Select a doctor and define the reason of your visit
                            </AppointmentStep>

                            <StyledAppointmentLabel
                                htmlFor={CREATE_APPOINTMENT.OCCUPATION}>Occupation</StyledAppointmentLabel>
                            <CreateAppointmentSelect
                                options={occupationOptions}
                                name={CREATE_APPOINTMENT.OCCUPATION}
                                selectId={CREATE_APPOINTMENT.OCCUPATION}
                            />

                            <StyledAppointmentLabel htmlFor={CREATE_APPOINTMENT.DOCTOR_ID}>Doctor's
                                name</StyledAppointmentLabel>
                            <CreateAppointmentSelect
                                onChange={() => handleChange}
                                options={doctorOptions}
                                name={CREATE_APPOINTMENT.DOCTOR_ID}
                                selectId={CREATE_APPOINTMENT.DOCTOR_ID}
                                isDisabled={!Boolean(newAppointment.doctors.length)}
                            />

                            <StyledAppointmentLabel htmlFor={CREATE_APPOINTMENT.REASON.INPUT_NAME}>Reason for
                                visit</StyledAppointmentLabel>
                            <StyledAppointmentField

                                name={CREATE_APPOINTMENT.REASON.INPUT_NAME}
                                id={CREATE_APPOINTMENT.REASON.INPUT_NAME}
                                placeholder={CREATE_APPOINTMENT.REASON.PLACEHOLDER}
                                type={'text'}
                            />

                            <StyledAppointmentLabel
                                htmlFor={CREATE_APPOINTMENT.NOTE.INPUT_NAME}>Note</StyledAppointmentLabel>
                            <StyledAppointmentField
                                name={CREATE_APPOINTMENT.NOTE.INPUT_NAME}
                                id={CREATE_APPOINTMENT.NOTE.INPUT_NAME}
                                placeholder={CREATE_APPOINTMENT.NOTE.PLACEHOLDER}
                                type={'text'}
                            />
                        </Flex>

                        <div>
                            <AppointmentStep><span>2</span>Chose a day for an appointment</AppointmentStep>
                            <Calendar
                                onChange={(day: any, doctorId: string) => handleDateChange(day, values.doctorId)}
                                isStepOneCompleted={!!values.doctorId}
                            />
                        </div>

                        <div>
                            <AppointmentStep><span>3</span>Select an available timeslot</AppointmentStep>

                            <TimeSlots>
                                <CreateAppointmentTimes date={date} isStepOneCompleted={!!values.doctorId}/>
                            </TimeSlots>
                        </div>

                        {/*<Button type={"submit"}>Submit</Button>*/}

                        <button type="submit"
                                className="sign-button sign-button_style">Submit
                        </button>
                    </AppointmentContent>
                </Form>
            )}
        </Formik>

    );
};