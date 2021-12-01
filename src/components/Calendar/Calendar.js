import React, {useState, useEffect} from 'react';
import {Field} from "formik";
import {ChevronLeft, ChevronRight} from "react-feather";
import {
    StyledCalendarHeader,
    StyledDay,
    StyledDayName,
    StyledMonthYear,
    StyledMothNavigate,
    StyledWeek
} from "./calendarStyles";
import axios from "axios";
import {selectDate, setTimes} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";

export const Calendar = ({value, onChange, isStepOneCompleted, today}, ...props) => {
    const [calendar, setCalendar] = useState([])
    const startDay = value.clone().startOf('month').startOf("week").add(1, 'days')
    const endDay = value.clone().endOf('month').endOf("week").add(1, 'days')
    const month = value.clone().format('MMMM')
    const year = value.clone().format('YYYY')

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")
        const tempDay = []
        while (day.isBefore(endDay, 'day')) {
            tempDay.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            )
        }
        setCalendar(tempDay)
    }, [value])

    const beforeToday = (day) => day.isBefore(new Date(), 'day')
    const prevMonth = () => {
        return value.clone().subtract(1, 'month')
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }

    const dispatch = useDispatch()
    const makeAppointment = useSelector(state => state.user.make_appointment)
    const apiUrl = 'https://reactlabapi.herokuapp.com/api/'
    const setDay = (day) => {
        axios.get(`${apiUrl}appointments/time/free?date=${day.toISOString()}&doctorID=${makeAppointment.selected_doctor_id}`,

            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                const times = response.data
                // console.log(times)
                dispatch(setTimes({times}))
                const date = day.toISOString()
                dispatch(selectDate({date}))

            })
            .catch(error =>
                console.log(error)
            )
        return !beforeToday(day) && onChange(day)
    }
    return (
        <div {...props}>
            <StyledCalendarHeader>
                <StyledMothNavigate onClick={() => onChange(prevMonth)}>
                    <ChevronLeft/>
                </StyledMothNavigate>
                <StyledMonthYear>
                    {month} {' '}
                    {year}</StyledMonthYear>
                <StyledMothNavigate onClick={() => onChange(nextMonth)}>
                    <ChevronRight/>
                </StyledMothNavigate>

            </StyledCalendarHeader>

            <StyledWeek>
                {
                    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <StyledDayName>{d}</StyledDayName>)
                }
            </StyledWeek>
            {calendar.map((week) =>
                <StyledWeek>
                    {week.map((day) => (
                            <StyledDay
                            isToday={day.format('DDMMYY') === today.format('DDMMYY')}
                            >
                                <Field
                                    onClick={() => {setDay(day)}}
                                    disabled={(!isStepOneCompleted || beforeToday(day))}

                                    id={day.format('DDMMMMYYYY').toString()}
                                    type={'radio'}
                                    name={'date'}
                                    value={day.toISOString()}
                                />
                                <label htmlFor={day.format('DDMMMMYYYY').toString()}>{day.format('D').toString()}</label>
                            </StyledDay>
                        )
                    )}
                </StyledWeek>
            )}
        </div>
    )
};