import React from 'react';
import styled from "styled-components";

const StyledAppointmentSelect = styled.select`
  width: 100%;
  background: #FFFFFF;

  border: 1px solid #DCE0EC;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 17px;
  line-height: 24px;
  color: #202225;
  margin-bottom: 40px;
`

export const AppointmentSelect = (props) => {
    return <StyledAppointmentSelect {...props}/>
};