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

export const Calendar = ({value, onChange}, ...props) => {
    const [calendar, setCalendar] = useState([])
    const startDay = value.clone().startOf('month').startOf("week").add(1, 'days')
    const endDay = value.clone().endOf('month').endOf("week").add(1, 'days')
    const month = value.clone().format('MMMM')
    const year = value.clone().format('YYYY')


    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")//.add(1, 'days')
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
                            <StyledDay>
                                <Field
                                    onClick={() => {!beforeToday(day) && onChange(day)}}
                                    disabled={beforeToday(day)}

                                    id={day.format('DDDDMMMMYYYY').toString()}
                                    type={'radio'}
                                    name={'date'}
                                    value={day.format('DDDDMMMMYYYY').toString()}
                                />
                                <label htmlFor={day.format('DDDDMMMMYYYY').toString()}>{day.format('D').toString()}</label>
                            </StyledDay>
                        )
                    )}
                </StyledWeek>
            )}
        </div>
    )
};