import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledPopupMessage = styled.div`
  //position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  
  left: 32px;
  bottom: 32px;
  width: 457px;
  height: 122px;
  //background-color: #34C197;
  background-color: ${props => props.isError ? 'red' : '#34C197'};
  border-radius: 12px;
  font-style: normal;
  color: white;
`
const StyledPopupTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
`
const StyledPopupText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
`
export const PopupMessage = (props) => {
    const make_appointment = useSelector(state => state.user.make_appointment)
    // const isError = make_appointment.errorMessage ? true : false
    const message = make_appointment.errorMessage
        ? make_appointment.errorMessage
        : 'Success'
    return (
        <StyledPopupMessage {...props}>
            <StyledPopupTitle>
                {message}
            </StyledPopupTitle>
            <StyledPopupText>
                {message}
            </StyledPopupText>
        </StyledPopupMessage>
    )
};