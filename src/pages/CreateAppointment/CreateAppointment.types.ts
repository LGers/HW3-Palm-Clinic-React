import moment from "moment";
import React from 'react';

export type OptionType = {
    label: string
    value: string
}

export type CreateAppointmentSelectProps = {
    options: OptionType[]
    name: string
    selectId: string
    isDisabled?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CreateAppointmentTimesProps = {
    date: moment.Moment
    isStepOneCompleted: boolean
}
