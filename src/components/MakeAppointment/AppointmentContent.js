import React from 'react';
import styled from "styled-components";

const StyledAppointmentContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  column-gap: 5.5%;
`

export const AppointmentContent = (props) => {
    return <StyledAppointmentContainer {...props}/>
};