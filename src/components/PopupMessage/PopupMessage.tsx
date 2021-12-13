import React from 'react';
import { StyledPopupMessage, StyledPopupText, StyledPopupTitle } from './popupMessage.styles';

type Props = {
    message: string
    isSuccess:boolean
}

export const PopupMessage: React.FC<Props> = ({message, isSuccess}) => {
    return (
        <StyledPopupMessage isSuccess={isSuccess}>
            <StyledPopupTitle>
                {message}
            </StyledPopupTitle>
            <StyledPopupText>
                {message}
            </StyledPopupText>
        </StyledPopupMessage>
    )
};