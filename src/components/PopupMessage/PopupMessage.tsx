import React from 'react';
import { StyledPopupMessage, PopupText, PopupTitle, PopupCloseButton } from './PopupMessage.styles';
import { AlertOctagon, CheckCircle, X } from "react-feather";
import { PopupMessageProps } from './PopupMessage.types';

export const PopupMessage: React.FC<PopupMessageProps> = ({message, title, isSuccess, onClose}) => {
  return (
    <StyledPopupMessage isSuccess={isSuccess}>
      {isSuccess ? <CheckCircle /> : <AlertOctagon />}
      <div>
        <PopupTitle>{title}</PopupTitle>
        <PopupText>{message}</PopupText>
      </div>
      <PopupCloseButton onClick={onClose}><X /></PopupCloseButton>
    </StyledPopupMessage>
  )
};
