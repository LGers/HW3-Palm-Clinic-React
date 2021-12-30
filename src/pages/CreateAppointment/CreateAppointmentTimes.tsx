import moment from "moment";
import { TimeRadioInput } from "../../components/TimeRadioInput/TimeRadioInput";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FREE_TIMES } from '../../constants/appointment.dictionary';
import { CreateAppointmentTimesProps } from './CreateAppointment.types';

export const CreateAppointmentTimes: React.FC<CreateAppointmentTimesProps> = ({isStepOneCompleted, date}) => {

    const appointmentTimes = useSelector((state: RootState) => state.createAppointment).times
    const timesArray = []
    for (let i = FREE_TIMES.START; i < FREE_TIMES.END; i++) {
        const obj = Object()
        obj.time = moment(date).startOf('day').add(i, 'hours').toISOString()
        obj.isAvailable = appointmentTimes.includes(obj.time)
        timesArray.push(obj)
    }

    const times = timesArray.map(time =>
      <TimeRadioInput
        key={time.time}
        radioId={time.time}
        time={moment(time.time).format('HH:OO a')}
        name={'date'}
        disabled={!time.isAvailable}
        isStepOneFull={isStepOneCompleted}
      />
    )

    return (
      <>
          {times}
      </>
    )
}