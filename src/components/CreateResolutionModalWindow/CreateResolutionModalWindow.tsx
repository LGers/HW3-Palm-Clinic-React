import React from 'react';
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import {Clipboard, User, X} from "react-feather";
import {Buttons, Name, Content, Resolution, StyledCreateResolutionModalWindow, TextArea } from './createResolutionModalWindow.styles';

type Props = {
    name: string
}
export const CreateResolutionModalWindow: React.FC<Props> = ({name, ...props}) => {
    return (
        <StyledCreateResolutionModalWindow {...props}>
            <Content>
                <Resolution>
                    <Title>Create a Resolution</Title>
                    <Name><User color={'#DCE0EC'}/><span>{name} Mila Western</span></Name>
                    <p>Resolution</p>
                    <TextArea/>
                </Resolution>
                <Buttons>
                    <Button secondary variant={'secondary'} leftIcon><X/>Cancel</Button>
                    <Button primary variant={'primary'} leftIcon><Clipboard/> Create</Button>
                </Buttons>
            </Content>

        </StyledCreateResolutionModalWindow>
    )
};