import moment from "moment";
import {TimeRadioInput} from "../../components/TimeRadioInput/TimeRadioInput";
import React from "react";
import {useSelector} from "react-redux";

export const AppointmentTimes = ({isStepOneCompleted}) => {
    const make_appointment = useSelector(state => state.makeAppointment.appointment)
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
            isStepOneFull={isStepOneCompleted}
        />
    )

    return (
        <>
            {times}
        </>
    )
}