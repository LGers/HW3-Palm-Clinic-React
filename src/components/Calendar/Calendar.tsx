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

import moment from "moment";

type Props = {
    onChange: any
    isStepOneCompleted: boolean
    today: any
}
export const Calendar: React.FC<Props> = ({onChange, isStepOneCompleted, today}, ...props) => {

    const [date, setDate] = useState(moment())
    let value = date
    const [calendar, setCalendar] = useState([])
    const startDay = value.clone().startOf('month').startOf("week").add(1, 'days')
    const endDay = value.clone().endOf('month').endOf("week").add(1, 'days')
    const month: string = value.clone().format('MMMM')
    const year: string = value.clone().format('YYYY')

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")
        const tempDay: any = []
        while (day.isBefore(endDay, 'day')) {
            tempDay.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            )
        }
        setCalendar(tempDay)
    }, [value])

    const beforeToday = (day:any) => day.isBefore(new Date(), 'day')
    const prevMonth = () => {
        return value.clone().subtract(1, 'month')
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }

    const setDay = (day:any) => {
        const isoDate = day.toISOString()
        onChange(isoDate)
        return !beforeToday(day) && setDate(day)
    }

    return (
        <div {...props}>
            <StyledCalendarHeader>
                <StyledMothNavigate onClick={() => setDate(prevMonth)}>
                    <ChevronLeft/>
                </StyledMothNavigate>
                <StyledMonthYear>
                    {month} {' '}
                    {year}</StyledMonthYear>
                <StyledMothNavigate onClick={() => setDate(nextMonth)}>
                    <ChevronRight/>
                </StyledMothNavigate>

            </StyledCalendarHeader>

            <StyledWeek>
                {
                    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <StyledDayName>{d}</StyledDayName>)
                }
            </StyledWeek>
            {calendar.map((week: any) =>
                <StyledWeek>
                    {week.map((day:any) => (
                            <StyledDay
                            isToday={day.format('DDMMYY') === today.format('DDMMYY')}
                            >
                                <Field
                                    onClick={() => {
                                        setDay(day)
                                    }}
                                    disabled={(!isStepOneCompleted || beforeToday(day))}

                                    id={day.format('DDMMMMYYYY').toString()}
                                    type={'radio'}
                                    name={'date'}
                                    value={day.toISOString()}
                                />
                                <label
                                    htmlFor={day.format('DDMMMMYYYY').toString()}>{day.format('D').toString()}</label>
                            </StyledDay>
                        )
                    )}
                </StyledWeek>
            )}
        </div>
    )
};