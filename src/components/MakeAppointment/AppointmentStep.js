import React from 'react';
import styled from "styled-components";

const StyledMakeAppointmentStep = styled.p`
  display: flex;
  align-items: center;
  color: #A1ABC9;
  margin-bottom: 40px;
  //margin-right: 60px;
  width: 100%;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A1ABC9;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    margin-right: 16px;
    padding: 16px;
  }
`

export const AppointmentStep = (props) => {
    return <StyledMakeAppointmentStep {...props}/>
};