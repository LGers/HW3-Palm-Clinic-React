import React from 'react';
import {Label, StyledTimeCheckbox } from './timeCheckbox.styles';

type Props = {
    checkboxId: string
    disabled: boolean
    time: string
}

export const TimeCheckbox: React.FC<Props> = (props) => {
    return (
        <StyledTimeCheckbox {...props}>
            <Label>
                <input type="checkbox" id={props.checkboxId} disabled={props.disabled}/>
                <label htmlFor={props.checkboxId}>{props.time} </label>
            </Label>
        </StyledTimeCheckbox>
    )
};