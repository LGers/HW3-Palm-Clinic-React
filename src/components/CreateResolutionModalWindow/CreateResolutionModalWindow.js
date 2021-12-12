import React from 'react';
import styled from "styled-components";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import {Clipboard, User, X} from "react-feather";

const StyledCreateResolutionModalWindow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 560px;
  border-radius: 16px;
  background-color: #FFF;

`
const Resolution = styled.div`
  padding: 40px;
  border-bottom: solid 1px #DCE0EC;;
  & p {
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #A1ABC9;
  }
`
const Name = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;

  & span {
    padding-left: 18px;
  }

  padding-bottom: 26px;
  
  & textarea {
    width: 100%;
    height: 160px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 40px;
  background: #F9FAFF;
  border-radius: 0 0 12px 12px;
`

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  max-height: 160px;
  min-height: 160px;
`
const Name4 = styled.div`

`


export const CreateResolutionModalWindow = ({name, ...props}) => {
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
                    <Button secondary type={'secondary'} leftIcon><X/>Cancel</Button>
                    <Button primary type={'primary'} leftIcon><Clipboard/> Create</Button>
                </Buttons>
            </Content>

        </StyledCreateResolutionModalWindow>
    )
};