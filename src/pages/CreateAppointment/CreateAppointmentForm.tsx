import { Form, Formik, FormikValues } from 'formik';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Flex } from '../../components/Flex/Flex';
import { AppointmentContent } from '../../components/MakeAppointment/AppointmentContent';
import { AppointmentStep } from '../../components/MakeAppointment/AppointmentStep';
import { Title } from '../../components/Title/Title';
import { appointmentValidationSchema } from '../../validations/appointment.validation';
import { StyledAppointmentField, StyledAppointmentLabel } from './CreateAppointmentSelects.styles';
import { CreateAppointmentSelect } from "./CreateAppointmentSelects";
import { CREATE_APPOINTMENT } from '../../constants/constants';
import { Calendar } from "../../components/Calendar/Calendar";
import { TimeSlots } from "../../components/TimeSlots/TimeSlots";
import { CreateAppointmentTimes } from "./CreateAppointmentTimes";
import moment from "moment";
import {
    createAppointment,
    fetchOccupations,
    fetchTimes,
} from "../../store/createAppointment/createAppointmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { CABINET_APPOINTMENTS_PATH } from '../../constants/path';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import { Button } from "../../components/Button/Button";
import { LABELS, STEP } from '../../constants/appointment.dictionary';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.styles';
import { ErrorMessage } from '../Auth/AuthPage.styles';

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
    const handleDateChange = (day: moment.Moment, doctorId: string) => {
        setDate(day)
        dispatch(fetchTimes({day, doctorId}))
    }

    function handleClick(values: FormikValues) {
        dispatch(createAppointment(values))
    }

    return (
        <Formik
            initialValues={
                {
                    doctorID: '',
                    reason: '',
                    note: '',
                    date: '',
                }
            }
            validationSchema={appointmentValidationSchema}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
                handleClick(values)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
              }) => (
                <Form>
                    <Breadcrumbs>
                        <Link to={CABINET_APPOINTMENTS_PATH}>Doctors</Link>
                        <ChevronRight />Make an appointment
                        {newAppointment.isFetching && <span>Loading...</span>}
                    </Breadcrumbs>

                    <Title>Make an appointment</Title>

                    <AppointmentContent>
                        <Flex direction={'column'} gap={'20px 0'}>
                            <AppointmentStep>
                                <span>1</span>{STEP.ONE}
                            </AppointmentStep>
                            <div>
                                <StyledAppointmentLabel
                                  htmlFor={CREATE_APPOINTMENT.OCCUPATION}>{LABELS.OCCUPATION}
                                </StyledAppointmentLabel>
                                <CreateAppointmentSelect
                                  options={occupationOptions}
                                  name={CREATE_APPOINTMENT.OCCUPATION}
                                  selectId={CREATE_APPOINTMENT.OCCUPATION}
                                />
                            </div>
                            <div>
                                <StyledAppointmentLabel
                                  htmlFor={CREATE_APPOINTMENT.DOCTOR_ID}>{LABELS.DOCTORS}
                                </StyledAppointmentLabel>
                                <CreateAppointmentSelect
                                  options={doctorOptions}
                                  name={CREATE_APPOINTMENT.DOCTOR_ID}
                                  selectId={CREATE_APPOINTMENT.DOCTOR_ID}
                                  isDisabled={!newAppointment.doctors.length}
                                />
                            </div>
                            <div>
                                <StyledAppointmentLabel
                                  htmlFor={CREATE_APPOINTMENT.REASON.INPUT_NAME}>{LABELS.REASON}
                                </StyledAppointmentLabel>
                                <StyledAppointmentField
                                  name={CREATE_APPOINTMENT.REASON.INPUT_NAME}
                                  id={CREATE_APPOINTMENT.REASON.INPUT_NAME}
                                  placeholder={CREATE_APPOINTMENT.REASON.PLACEHOLDER}
                                  type={'text'}
                                />
                                {touched.reason && errors.reason &&
                                <ErrorMessage>{errors.reason}</ErrorMessage>}
                            </div>
                            <div>
                                <StyledAppointmentLabel
                                  htmlFor={CREATE_APPOINTMENT.NOTE.INPUT_NAME}>{LABELS.NOTE}
                                </StyledAppointmentLabel>
                                <StyledAppointmentField
                                  name={CREATE_APPOINTMENT.NOTE.INPUT_NAME}
                                  id={CREATE_APPOINTMENT.NOTE.INPUT_NAME}
                                  placeholder={CREATE_APPOINTMENT.NOTE.PLACEHOLDER}
                                  type={'text'}
                                />
                                {touched.note && errors.note &&
                                <ErrorMessage>{errors.note}</ErrorMessage>}
                            </div>
                        </Flex>

                        <div>
                            <AppointmentStep><span>2</span>{STEP.TWO}</AppointmentStep>
                            <Calendar
                                onChange={(day: moment.Moment) => handleDateChange(day, values.doctorID)}
                                isStepOneCompleted={!!values.doctorID}
                            />
                        </div>
                        <div>
                            <AppointmentStep><span>3</span>{STEP.THREE}</AppointmentStep>
                            <TimeSlots>
                                <CreateAppointmentTimes
                                  date={date}
                                  isStepOneCompleted={!!values.doctorID}
                                />
                            </TimeSlots>
                        </div>
                    </AppointmentContent>
                    <Flex justify={'flex-end'}>
                        <Button type={'submit'} primary>Submit</Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};
