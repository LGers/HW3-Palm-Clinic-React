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

export const CreateResolutionModalWindow: React.FC<CreateResolutionModalWindowProps> =
  ({name, ...props}) => {
      return (
        <StyledCreateResolutionModalWindow {...props}>
            <Content>
                <Resolution>
                    <Title>Create a Resolution</Title>
                    <Name><User color={'#DCE0EC'} /><span>{name} Mila Western</span></Name>
                    <p>Resolution</p>
                    <TextArea />
                </Resolution>
                <Buttons>
                    <Button secondary leftIcon><X />Cancel</Button>
                    <Button primary leftIcon><Clipboard /> Create</Button>
                </Buttons>
            </Content>
        </StyledCreateResolutionModalWindow>
      )
};
