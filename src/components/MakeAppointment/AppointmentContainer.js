import React from 'react';
import styled from "styled-components";

const StyledAppointmentContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  //column-gap: 104px;
  column-gap: 5.5%;
  //margin-top: 40px;
`

export const AppointmentContainer = (props) => {
    return <StyledAppointmentContainer {...props}/>
};