import React from 'react';
import { Field } from "formik";
import { Label, StyledTimeRadioInput } from './TimeRadioInput.styles';
import { TimeRadioInputProps } from './TimeRadioInput.types';

export const TimeRadioInput: React.FC<TimeRadioInputProps> = (props) => {
  return (
    <StyledTimeRadioInput {...props}>
      <Label>
        <Field type="radio"
               id={props.radioId}
               disabled={props.isStepOneFull ? props.disabled : true}
               name={props.name}
               value={props.radioId}
        />
        <label htmlFor={props.radioId}>{props.time} </label>
      </Label>
    </StyledTimeRadioInput>
  )
};