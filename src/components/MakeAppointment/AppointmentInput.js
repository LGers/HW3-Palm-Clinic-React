import React from 'react';
import styled from "styled-components";

const StyledAppointmentInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  

  & label {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #000000;
  }
  
  & input {
    padding: 16px 24px;
    background: #FFFFFF;
    border: 1px solid #DCE0EC;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    font-size: 17px;
    line-height: 24px;
    color: #202225;


    &:focus {
      border: 1px solid #7297FF;
    }
  }

`

export const AppointmentInput = (props) => {
    return <StyledAppointmentInput {...props}/>
};