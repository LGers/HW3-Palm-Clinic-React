import moment from "moment";
import {TimeRadioInput} from "../../components/TimeRadioInput/TimeRadioInput";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

type Props = {
    date: any
    isStepOneCompleted: boolean
}

export const CreateAppointmentTimes: React.FC<Props> = ({isStepOneCompleted, date}) => {

    const createAppointment = useSelector((state: RootState) => state.createAppointment)
    const tempArray: any = []
    createAppointment.times.map(time => {
        tempArray.push(moment(time).format('HH'))
    })
    const timesArray = []
//todo refactor it Array(13)
    for (let i = 8; i < 21; i++) {
        const obj = Object()
        obj.id = 'hour' + i
        const formatHour = i < 10 ? '0' + i : i
        obj.time = moment(date).startOf('day').add(i, 'hours').format()

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
            name={'date'}
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