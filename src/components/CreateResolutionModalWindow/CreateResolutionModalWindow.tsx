import React from 'react';
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Clipboard, User, X } from "react-feather";
import {
    Buttons,
    Name,
    Content,
    Resolution,
    StyledCreateResolutionModalWindow,
    TextArea
} from './CreateResolutionModalWindow.styles';
import { CreateResolutionModalWindowProps } from './CreateResolutionModalWindow.types';
import { useDispatch } from 'react-redux';
import { createResolution } from '../../store/appointments/appointmentsSlice';

export const CreateResolutionModalWindow: React.FC<CreateResolutionModalWindowProps> =
  ({name, ...props}) => {
    const dispatch = useDispatch()

    const handleCancel = () => {
      return dispatch(createResolution(''))
    }

    const handleSave = () => {
      return dispatch(createResolution(''))
    }


    return (
      <StyledCreateResolutionModalWindow {...props}>
        <Content>
          <Resolution>
            <Title>Create a Resolution</Title>
            <Name><User color={'#DCE0EC'} /><span>{name}</span></Name>
            <p>Resolution</p>
            <TextArea />
          </Resolution>
          <Buttons>
            <Button secondary leftIcon onClick={handleCancel}><X />Cancel</Button>
            <Button primary leftIcon onClick={handleSave}><Clipboard /> Create</Button>
          </Buttons>
        </Content>
      </StyledCreateResolutionModalWindow>
    )
  };
