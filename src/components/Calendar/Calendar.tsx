import React, {useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from "react-feather";
import {
    StyledCalendarHeader,
    StyledDay,
    StyledDayName,
    StyledMonthYear,
    StyledMothNavigate,
    StyledWeek
} from "./Calendar.styles";

import moment from "moment";
import {DAY_NAMES} from "../../constants/calendar.dictionary";

type Props = {
    onChange: any
    isStepOneCompleted: boolean
}
export const Calendar: React.FC<Props> = ({onChange, isStepOneCompleted}, ...props) => {

    const today = moment()
    const [date, setDate] = useState(moment())
    let value = date
    const [calendar, setCalendar] = useState([])
    const startDay = value.clone().startOf('month').startOf("week").add(1, 'days')
    const endDay = value.clone().endOf('month').endOf("week").add(1, 'days')
    const month: string = value.clone().format('MMMM')
    const year: string = value.clone().format('YYYY')

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")
        const tempDay:any = []
        while (day.isBefore(endDay, 'day')) {
            tempDay.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            )
        }
        setCalendar(tempDay)
    }, [value])

    const beforeToday = (day: moment.Moment) => day.isBefore(new Date(), 'day')
    const isDayNotInCurrentMonth = (day: moment.Moment) => day.isBefore(date, 'month') || day.isAfter(date, 'month')

    const prevMonth = () => {
        return value.clone().subtract(1, 'month')
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }

    const setDay = (day: moment.Moment) => {
        const isoDate = day.add(4, 'hour').toISOString()
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
                    DAY_NAMES.map(d => <StyledDayName>{d}</StyledDayName>)
                }
            </StyledWeek>
            {calendar.map((week:any) =>
                <StyledWeek>
                    {week.map((day:any) => (

                            <StyledDay

                                isDayNotInCurrentMonth={isDayNotInCurrentMonth(day)}
                                isToday={day.format('DDMMYY') === today.format('DDMMYY')}

                            >
                                <input
                                    onClick={() => {
                                        setDay(day)
                                    }}
                                    disabled={(!isStepOneCompleted || beforeToday(day))}

                                    id={day.format('DDMMMMYYYY').toString()}
                                    type={'radio'}
                                    name={'calendarDate'}
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